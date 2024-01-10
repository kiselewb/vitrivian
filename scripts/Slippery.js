export class Slippery {
    constructor(slipperyBlockClass, slipperyParams = {}) {
        this.slipperyBlockClass = slipperyBlockClass
        this.slipperyParams = slipperyParams

        try {
            this.slipperyBlock = document.querySelector(`.${this.slipperyBlockClass}`)

            if (this.slipperyBlock) {
                this.slipperyList = this.slipperyBlock.querySelector('.slippery-list')
                this.slipperyItem = this.slipperyList.querySelector('.slippery-item')
                this.slipperyItems = [...this.slipperyList.querySelectorAll('.slippery-item')]
                this.slipperyActiveItem = this.slipperyList.querySelector('.slippery-item.active')

                this.blockHeight = this.slipperyParams.blockHeight || 320
                this.widthBlock = this.slipperyParams.widthBlock || 600
            } else {
                throw `Slipper ${this.slipperyBlockClass} no found!`
            }
        } catch (error) {
            console.warn(error)
        }
    }

    #initMainStyles() {
        this.slipperyBlock.style.height = `${this.blockHeight}px`
        this.slipperyBlock.style.width = `${this.widthBlock}px`
        this.slipperyBlock.style.position = 'relative'
        this.slipperyList.style.width = '100%'
        this.slipperyList.style.height = '100%'
        this.slipperyList.style.overflowX = 'hidden'
        this.slipperyList.style.overflowY = 'auto'
        this.slipperyList.style.scrollbarWidth = 'none'
        this.slipperyItems.map((item) => {
            item.style.width = '100%'
            item.style.boxSizing = 'border-box'
        })
    }

    #renderCloneItem() {
        this.slipperyClonedActiveItem = this.slipperyActiveItem.cloneNode(true)
        this.slipperyClonedActiveItem.classList.add('cloned')
        this.slipperyClonedActiveItem.style.position = 'absolute'
        this.slipperyClonedActiveItem.style.bottom = '0'
        this.slipperyClonedActiveItem.style.top = 'auto'
        this.slipperyClonedActiveItem.style.left = '0'
        this.slipperyClonedActiveItem.style.right = 'auto'
        this.slipperyClonedActiveItem.style.opacity = '1'
        this.slipperyBlock.append(this.slipperyClonedActiveItem)
    }

    #getDifferenceCoord(coordOne, coordTwo) {
        return coordOne - coordTwo
    }

    #renderLayoutCloneItemTop() {
        this.slipperyClonedActiveItem.style.opacity = '1'
        this.slipperyClonedActiveItem.style.top = '0'
        this.slipperyClonedActiveItem.style.bottom = 'auto'
    }

    #renderLayoutCloneItemBottom() {
        this.slipperyClonedActiveItem.style.opacity = '1'
        this.slipperyClonedActiveItem.style.bottom = '0'
        this.slipperyClonedActiveItem.style.top = 'auto'
    }

    start() {
        if (this.slipperyBlock) {
            this.#initMainStyles()
            this.#renderCloneItem()

            this.slipperyList.addEventListener('scroll', () => {
                this.differenceCoordBetweenItems = this.#getDifferenceCoord(
                    this.slipperyActiveItem.getBoundingClientRect().y,
                    this.slipperyList.getBoundingClientRect().y
                ) - this.blockHeight

                this.isInPosition =
                    (this.differenceCoordBetweenItems >= -320) && (this.differenceCoordBetweenItems <= 20)
                        ? true : false
                this.isTopPosition = this.differenceCoordBetweenItems < -this.blockHeight
                this.isBottomPosition = !this.isInPosition && !this.isTopPosition

                if (this.isTopPosition) {
                    this.#renderLayoutCloneItemTop()
                } else if (this.isBottomPosition) {
                    this.#renderLayoutCloneItemBottom()
                } else if (this.isInPosition) {
                    this.slipperyClonedActiveItem.style.opacity = '0'
                }
            })
        }
    }
}