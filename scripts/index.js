const body = document.querySelector('body')
import { Switcher } from "./Switcher.js"
import { Filter } from "./Filter.js"
import { Progress } from "./Progress.js"
import { Slippery } from "./Slippery.js"

// FAQ SPOLER
const faqItems = document.querySelectorAll('.faq__item')

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

// PROGRESS
const tariffsProgress = new Progress('statistic-tariffs__block', {
    progressPointsBlockClass: 'progress-points',
    progressPointClass: 'progress-point',
    progressLineText: '',
    currentValue: 1728,
    maxValue: 6000,
    progressBlockWidth: 1240,
    mainValues: [1000, 2000, 3000, 4000, 5000]
}).start()
const tournamentsPrizeProgress = new Progress('tournaments-prizes__block', {
    progressPointsBlockClass: 'progress-points',
    progressPointClass: 'progress-point',
    progressLineText: '',
    currentValue: 94,
    maxValue: 100,
    progressBlockWidth: 550,
    mainValues: [20, 50, 80]
}).start()
const awardsProgress = new Progress('tournaments-awards__block', {
    progressPointsBlockClass: 'progress-points',
    progressPointClass: 'progress-point',
    progressLineText: '',
    currentValue: 28,
    maxValue: 100,
    progressBlockWidth: 550,
    mainValues: [20, 50, 80]
}).start()

// SWITCHERS
const langSwitcher = new Switcher('lang-switcher').start()
const accountSwitcher = new Switcher('accounts-switcher').start()

// FILTERS
const accountFilter = new Filter('accounts-filter', 'accounts-filter__item').start()
const periodFilter = new Filter('accounts-period', 'accounts-period__date').start()
const tournamentsFilter = new Filter('tournaments-filter', 'tournaments-filter__item').start()

// SLIPPERIES
const tournamentsReferralsSlippery = new Slippery('tournaments-subreferrals__longlist', {
    blockHeight: 360,
}).start()
const tournamentsSubofferSlippery = new Slippery('tournaments-suboffer', {
    widthBlock: 520,
    blockHeight: 300,
}).start()

// FOOTER SUBMENU SPOILER
const footerMenu = document.querySelectorAll('.footer__menu')

footerMenu.forEach((footerMenu) => {
    footerMenu.addEventListener('click', (event) => {
        const footerSubMenu = footerMenu.children[1]
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
const mobileMenuWrapper = document.querySelector('.mobmenu__wrapper')
const mobileMenuCloseBtn = document.querySelector('.mobmenu__close')
const headerSection = document.querySelector('header')
const mainSection = document.querySelector('main')

burgerButton.addEventListener('click', (event) => {
    const documentHeight = window.innerHeight

    mobileMenu.style.display = 'flex'
    mobileMenu.style.height = `${documentHeight}px`
    setTimeout(() => {
        mobileMenuWrapper.style.bottom = '0'
    }, 100)
    body.style.overflow = 'hidden'
    headerSection.style.filter = 'blur(10px)'
    mainSection.style.filter = 'blur(10px)'

    mobileMenu.addEventListener('click', (event) => {
        const { target } = event

        if (target === mobileMenuCloseBtn || target === mobileMenu) {
            mobileMenuWrapper.style.bottom = '-100%'
            setTimeout(() => {
                mobileMenu.style.display = 'none'
            }, 400)
            body.style.overflow = 'auto'
            headerSection.style.filter = 'none'
            mainSection.style.filter = 'none'
        }
    })
})