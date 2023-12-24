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

// BURGER MENU
const burgerMenu = document.querySelector('.header__burger')
const navigation = document.querySelector('.navigation')
const headerMenu = burgerMenu.closest('.header__menu')

burgerMenu.addEventListener('click', (event) => {
    burgerMenu.classList.toggle('open')

    isOpened = burgerMenu.classList.contains('open')
    if (isOpened) {
        navigation.style.left = '0'
    } else {
        navigation.style.left = '-100%'
    }
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