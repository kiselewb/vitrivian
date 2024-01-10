export class Progress {
    constructor(progressBlockClass, progressParams = {}) {
        this.progressBlockClass = progressBlockClass
        this.progressParams = progressParams

        try {
            this.progressBlock = document.querySelector(`.${this.progressBlockClass}`)
            if (this.progressBlock) {
                this.progressWrapper = this.progressBlock.querySelector('.progress-wrapper')

                this.progressList = this.progressBlock.querySelector('.progress-list')
                this.progressItem = this.progressList.querySelector('.progress-item')
                this.progressItemWidth = this.progressItem.clientWidth
                this.progressItems = [...this.progressList.querySelectorAll('.progress-item')]

                this.progressLine = this.progressBlock.querySelector('.progress-line')
                this.progressLineActive = this.progressLine.querySelector(`.progress-line__active`)
                this.progressLineTitle = this.progressLine.querySelector(`.progress-line__title`)
                this.progressLineValue = this.progressLine.querySelector(`.progress-line__value`)

                this.progressPointsBlockClass = this.progressParams.progressPointsBlockClass || 'progress-points'
                this.progressPointClass = this.progressParams.progressPointClass || 'progress-point'
                this.progressLineText = this.progressParams.progressLineText || ''
                this.currentValue = this.progressParams.currentValue || 10
                this.maxValue = this.progressParams.maxValue || 100
                this.progressBlockWidth = this.progressParams.progressBlockWidth || document.body.clientWidth
                this.mainValues = this.progressParams.mainValues || []

                this.progressPointsBlock = this.progressLine.querySelector(`.${this.progressPointsBlockClass}`)
                this.progressPoints = [...this.progressPointsBlock.children]
            } else {
                throw `Progress block '${this.progressBlockClass}' no found!`
            }
        } catch (error) {
            // console.warn(error)
        }
    }

    #setProgressWrapperWidth(progressBlockWidth) {
        this.progressWrapper.style.width = `${progressBlockWidth}px`
    }

    #renderActiveLine(progressBlockWidth) {
        this.progressLineActiveWidth = progressBlockWidth * this.currentValue / this.maxValue
        this.progressLineActive.style.width = `${this.progressLineActiveWidth}px`
    }

    #addLabelsToActiveLine() {
        this.progressLineTitle.textContent = this.progressLineText || ''
        this.progressLineValue.textContent = `${this.currentValue}` || '0'
        this.progressLineValue.textContent += ' $'

        if (this.currentValue === 0) {
            this.progressLineValue.style.left = 0
        } else if (this.currentValue === this.maxValue) {
            this.progressLineValue.style.right = 0
        } else {
            this.progressLineValue.style.right = `-${(this.progressLineValue.clientWidth / 2)}px`
        }
    }

    #getCoordItem(value) {
        return (this.progressBlockWidth * value / this.maxValue) - (this.progressItemWidth / 2)
    }

    #renderLayoutItems(items, mainValues) {
        items.map((item, index) => {
            item.style.left = `${this.#getCoordItem(mainValues[index])}px`
        })
    }

    #getCoordPoint(value, pointHTML) {
        return (this.progressBlockWidth * value / this.maxValue) - (pointHTML.clientWidth / 2)
    }

    #renderPoints(mainValues) {
        mainValues.forEach(value => {
            const pointHTML = document.createElement('span')
            pointHTML.classList.add(this.progressPointClass)
            if (this.currentValue >= value) {
                pointHTML.classList.add('active')
            }
            this.progressPointsBlock.append(pointHTML)

            pointHTML.style.left = `${this.#getCoordPoint(value, pointHTML)}px`
        });
        return [...this.progressPointsBlock.children]
    }



    start() {
        if (this.progressBlock) {
            this.progressList.style.position = 'relative'
            this.progressItems.map(item => item.style.position = 'absolute')

            this.#setProgressWrapperWidth(this.progressBlockWidth)
            this.#renderActiveLine(this.progressBlockWidth)
            this.#addLabelsToActiveLine()

            if (this.mainValues.length > 0) {
                this.#renderLayoutItems(this.progressItems, this.mainValues)
                this.#renderPoints(this.mainValues)
            }
        }

        return this
    }
}