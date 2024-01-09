export class Filter {
    constructor(filterClass, filterItemClass) {
        this.filterClass = filterClass
        this.filterItemClass = filterItemClass
    }

    start() {
        try {
            this.filterClassHTML = document.querySelector(`.${this.filterClass}`)
            this.filterItemClassHTML = document.querySelectorAll(`.${this.filterItemClass}`)

            this.filterClassHTML.addEventListener('click', (event) => {
                const { target } = event
                this.isFilterItem = target.closest(`.${this.filterItemClass}`)

                if (this.isFilterItem) {
                    this.filterItemClassHTML.forEach((filterItem) => {
                        filterItem.classList.remove('active')
                    })
                    this.isFilterItem.classList.add('active')
                }
            })
        } catch (error) {

        }

    }
}