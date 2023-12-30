const body = document.querySelector('body')

// FAQ SPOLER
const faqItems = document.querySelectorAll('.faq__item')
const faqAnswer = document.querySelector('.faq__answer')
const faqQuestion = document.querySelector('.faq__question')

const questionPadding = 16

faqItems.forEach((faqItem) => {
    const faqQuestionHeight = faqItem.children[0].clientHeight
    faqItem.style.height = `${faqQuestionHeight}px`

    faqItem.addEventListener('click', () => {
        let isOpened = faqItem.classList.contains('open')
        const faqQuestionHeight = faqItem.children[0].clientHeight
        const faqAnswerHeight = faqItem.children[1].clientHeight

        if (isOpened) {
            faqItem.classList.remove('open')
            faqItem.style.height = `${faqQuestionHeight}px`
        } else {
            faqItems.forEach((faqItem) => {
                faqItem.classList.remove('open')
                const faqQuestionHeight = faqItem.children[0].clientHeight
                faqItem.style.height = `${faqQuestionHeight}px`
            })
            faqItem.style.height = `${faqQuestionHeight + faqAnswerHeight + questionPadding}px`
            faqItem.classList.add('open')
        }
    })
})

// LANG SWITCHER
const langSwitcher = document.querySelector('.lang-switcher')
const langSwitcherArrow = document.querySelector('.lang-switcher__arrow')
const langSwitcherSubItems = document.querySelectorAll('.lang-switcher__subitem')
const langSwitcherItemSelected = document.querySelector('.lang-switcher__item--selected')
const currentSelectedLangValue = langSwitcherItemSelected.children[1].textContent

const selectCurrentLang = () => {
    langSwitcherSubItems.forEach((subItem) => {
        langValue = subItem.dataset.lang
        if (langValue === currentSelectedLangValue) {
            subItem.children[2].style.opacity = '1'
        }
    })
}
selectCurrentLang()

langSwitcher.addEventListener('click', (event) => {
    langSwitcher.classList.toggle('active')

    const isOpened = langSwitcher.classList.contains('active')

    if (isOpened) {
        langSwitcherArrow.style.transform = 'rotate(270deg)'
    } else {
        langSwitcherArrow.style.transform = 'rotate(90deg)'
    }

    langSwitcherSubItems.forEach((subItem) => {
        subItem.addEventListener('click', (event) => {
            let currentSelectedImageSrc = langSwitcherItemSelected.children[0]
            let currentSelectedText = langSwitcherItemSelected.children[1]
            const newSelectedImageSrc = subItem.querySelector('img').src
            const newSelectedText = subItem.dataset.lang

            currentSelectedImageSrc.src = newSelectedImageSrc
            currentSelectedText.textContent = newSelectedText

            langSwitcherSubItems.forEach(subItem => subItem.children[2].style.opacity = '0')
            subItem.children[2].style.opacity = '1'
        })
    })
})

// FOOTER SUBMENU SPOILER
const footerMenu = document.querySelectorAll('.footer__menu')

footerMenu.forEach((footerMenu) => {
    footerMenu.addEventListener('click', (event) => {
        footerSubMenu = footerMenu.children[1]
        const footerMenuArrow = footerMenu.children[0].children[0]

        footerSubMenu.classList.toggle('active')

        const isOpened = footerSubMenu.classList.contains('active')
        if (isOpened) {
            footerMenuArrow.style.transform = 'rotate(270deg)'
        } else {
            footerMenuArrow.style.transform = 'rotate(90deg)'
        }
    })
})

// STATS SLIDER
const statsSlider = new Swiper('.stats-slider', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.stats-slider-pagination',
        bulletClass: 'stats-slider-pagination-bullet',
        bulletActiveClass: 'stats-slider-pagination-bullet--active',
    },
});

// BLOG SLIDER
const blogSlider = new Swiper('.blog-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 5,

    breakpoints: {
        1100: {
            loop: false,
            slidesPerView: 4,
            spaceBetween: 10,
        },
        980: {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 10,
        },
        640: {
            loop: true,
            slidesPerView: 2.5,
            spaceBetween: 5,
        },
        320: {
            loop: true,
            slidesPerView: 1.5,
            spaceBetween: 5,
        }
    }
});

// STATISTIC ACCOUNTS SLIDER
const statisticAccountSlider = new Swiper('.statistic-account__slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,

    breakpoints: {
        1120: {
            loop: false,
            slidesPerView: 3,
        },
        930: {
            loop: false,
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        750: {
            loop: false,
            slidesPerView: 2,
            spaceBetween: 10,
        },
        495: {
            loop: false,
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
    }
});

// STATISTIC TARIFFS SLIDER
const statisticTariffsSlider = new Swiper('.statistic-tariffs__slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1.5,
    spaceBetween: 10,

    breakpoints: {
        820: {
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 0,
        },
        640: {
            loop: false,
            slidesPerView: 3.5,
            spaceBetween: 40,
        },
        460: {
            loop: false,
            slidesPerView: 2.5,
            spaceBetween: 40,
        },
        420: {
            loop: false,
            slidesPerView: 2.5,
            spaceBetween: 20,
        }
    }
});

// MOBILE MENU
const burgerButton = document.querySelector('.header__burger')
const mobileMenu = document.querySelector('.mobmenu')
const mobileMenuCloseBtn = document.querySelector('.mobmenu__close')
const headerSection = document.querySelector('header')
const mainSection = document.querySelector('main')
const clientWindowHeight = window.screen.height
const mobileMenuHeight = mobileMenu.clientHeight

mobileMenu.style.top = `${clientWindowHeight}px`

burgerButton.addEventListener('click', (event) => {
    mobileMenu.style.display = 'flex'

    const clientWindowHeight = window.screen.height
    const mobileMenuHeight = mobileMenu.clientHeight

    mobileMenu.style.top = `${clientWindowHeight - mobileMenuHeight}px`

    body.style.overflow = 'hidden'
    headerSection.style.filter = 'blur(10px)'
    mainSection.style.filter = 'blur(10px)'

    mobileMenuCloseBtn.addEventListener('click', () => {
        mobileMenu.style.top = `${clientWindowHeight}px`
        setTimeout(() => {
            mobileMenu.style.display = 'none'
        }, 400)
        body.style.overflow = 'auto'
        headerSection.style.filter = 'none'
        mainSection.style.filter = 'none'
    })
    // }
})

// ACCOUNT PERIOD SWITCH
const periodDates = document.querySelectorAll('.accounts-period__date')

periodDates.forEach((periodDate) => {
    periodDate.addEventListener('click', (event) => {
        periodDates.forEach((periodDate) => {
            periodDate.classList.remove('active')
        })

        periodDate.classList.add('active')
    })

})

// ACCOUNT FILTER SWITCH
const filterItems = document.querySelectorAll('.accounts-filter__item')

filterItems.forEach((filterItem) => {
    filterItem.addEventListener('click', (event) => {
        filterItems.forEach((filterItem) => {
            filterItem.classList.remove('active')
        })

        filterItem.classList.add('active')
    })

})