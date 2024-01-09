const body = document.querySelector('body')
export class Switcher {
    constructor(switcherClass) {
        this.switcherClass = switcherClass
        try {
            this.switcherClassHTML = document.querySelector(`.${this.switcherClass}`)
            if (this.switcherClassHTML) {
                this.switcherArrow = this.switcherClassHTML.querySelector('.switcher__arrow')
                this.switcherSublist = this.switcherClassHTML.querySelector('.switcher__sublist')

                this.switcherCurrentItem = this.switcherClassHTML.querySelector('.switcher__item')
                this.switcherCurrentImage = this.switcherClassHTML.querySelector('.switcher__image')
                this.switcherCurrentText = this.switcherClassHTML.querySelector('.switcher__text')
                this.switcherCurrentItemValue = this.switcherCurrentItem.dataset.value

                this.switcherCurrentSubItem = this.switcherSublist.querySelector(`[data-value="${this.switcherCurrentItemValue}"]`)
                this.switcherCurrentSubItemCheckmark = this.switcherCurrentSubItem.querySelector('.switcher__checkmark')
                this.switcherCurrentSubItemCheckmark.style.opacity = '1'
            } else {
                throw `Switcher '${this.switcherClass}' no found!`
            }
        } catch (error) {
            // console.warn(error)
        }
    }

    #open() {
        this.switcherClassHTML.classList.add('active')
        this.switcherArrow.style.transform = 'rotate(270deg)'
    }

    #close() {
        this.switcherClassHTML.classList.remove('active')
        this.switcherArrow.style.transform = 'rotate(90deg)'
    }

    start() {
        if (this.switcherClassHTML) {
            body.addEventListener('click', (event) => {
                const { target } = event

                this.isOpened = this.switcherClassHTML.classList.contains('active')
                this.isSwitcher = this.switcherClassHTML.contains(target)
                this.isSubItem = this.switcherSublist.contains(target)

                if (this.isSwitcher && !this.isOpened) {
                    this.#open()
                } else if (this.isSwitcher && this.isOpened && !this.isSubItem || (!this.isSwitcher && this.isOpened)) {
                    this.#close()
                } else if (this.isSubItem) {
                    this.#close()
                    this.switcherSelectedSubItem = target.closest('.switcher__subitem')
                    this.switcherSelectedText = this.switcherSelectedSubItem.dataset.value
                    this.switcherSelectedImageSrc = this.switcherSelectedSubItem.querySelector('img').src
                    this.switcherSelectedCheckmark = this.switcherSelectedSubItem.querySelector('.switcher__checkmark')

                    this.switcherCurrentSubItemCheckmark.style.opacity = '0'
                    this.switcherCurrentImage.src = this.switcherSelectedImageSrc
                    this.switcherCurrentText.textContent = this.switcherSelectedText
                    this.switcherSelectedCheckmark.style.opacity = '1'
                    this.switcherCurrentSubItemCheckmark = this.switcherSelectedCheckmark
                }
            })
        }
    }
}