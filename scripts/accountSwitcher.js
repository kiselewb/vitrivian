// ACCOUNTS SWITCHER
const accountSwitcher = document.querySelector('.accounts-switcher')
const accountSwitcherArrow = document.querySelector('.accounts-switcher__arrow')
const accountSwitcherSubItems = document.querySelectorAll('.accounts-switcher__subitem')
const accountSwitcherItemSelected = document.querySelector('.accounts-switcher__item--selected')

accountSwitcher.addEventListener('click', (event) => {
    accountSwitcher.classList.toggle('active')

    const isOpened = accountSwitcher.classList.contains('active')

    if (isOpened) {
        accountSwitcherArrow.style.transform = 'rotate(270deg)'
    } else {
        accountSwitcherArrow.style.transform = 'rotate(90deg)'
    }

    accountSwitcherSubItems.forEach((subItem) => {
        subItem.addEventListener('click', (event) => {
            let currentSelectedImageSrc = accountSwitcherItemSelected.children[0]
            let currentSelectedText = accountSwitcherItemSelected.children[1]
            const newSelectedImageSrc = subItem.querySelector('img').src
            const newSelectedText = subItem.dataset.value

            currentSelectedImageSrc.src = newSelectedImageSrc
            currentSelectedText.textContent = newSelectedText
        })
    })
})