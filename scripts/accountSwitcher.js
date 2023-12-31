// ACCOUNTS SWITCHER
const accountSwitcher = document.querySelector('.accounts-switcher')
const accountDecor = document.querySelector('.header-user__decor')
const accountSwitcherArrow = document.querySelector('.accounts-switcher__arrow')
const accountSwitcherSubItems = document.querySelectorAll('.accounts-switcher__subitem')
const accountSwitcherItemSelected = document.querySelector('.accounts-switcher__item--selected')
const currentSelectedAccountValue = accountSwitcherItemSelected.children[1].textContent.trim()

const selectCurrentAccount = () => {
    accountSwitcherSubItems.forEach((subItem) => {
        accountValue = subItem.dataset.value
        if (accountValue === currentSelectedAccountValue) {
            subItem.children[2].style.opacity = '1'
        }
    })
}
selectCurrentAccount()

accountSwitcher.addEventListener('click', (event) => {
    accountSwitcher.classList.toggle('active')
    accountDecor.style.borderBottomLeftRadius = '0'

    const isOpened = accountSwitcher.classList.contains('active')

    if (isOpened) {
        accountSwitcherArrow.style.transform = 'rotate(270deg)'
    } else {
        accountSwitcherArrow.style.transform = 'rotate(90deg)'
        accountDecor.style.borderBottomLeftRadius = '2rem'
    }

    accountSwitcherSubItems.forEach((subItem) => {
        subItem.addEventListener('click', (event) => {
            let currentSelectedImageSrc = accountSwitcherItemSelected.children[0]
            let currentSelectedText = accountSwitcherItemSelected.children[1]
            const newSelectedImageSrc = subItem.querySelector('img').src
            const newSelectedText = subItem.dataset.value

            currentSelectedImageSrc.src = newSelectedImageSrc
            currentSelectedText.textContent = newSelectedText

            accountSwitcherSubItems.forEach(subItem => subItem.children[2].style.opacity = '0')
            subItem.children[2].style.opacity = '1'
        })
    })

    body.addEventListener('click', (event) => {
        const { target } = event

        if (!(target === switcherSublist) && !(target === accountSwitcher) && !(target === switcherArrow) && !(target === switcherText) && !(target === switcherImage)) {
            accountSwitcherArrow.style.transform = 'rotate(90deg)'
            accountSwitcher.classList.remove('active')
        }
    })
})