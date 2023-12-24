const faqItems = document.querySelectorAll('.faq__item')
const faqAnswer = document.querySelector('.faq__answer')
const faqQuestion = document.querySelector('.faq__question')

const questionPadding = 16


faqItems.forEach((faqItem) => {
    const faqQuestionHeight = faqItem.children[0].clientHeight
    faqItem.style.height = `${faqQuestionHeight}px`

    faqItem.addEventListener('click', (event) => {
        faqItems.forEach((item) => {
            item.classList.remove('open')
            item.style.height = `${item.children[0].clientHeight}px`
        })

        faqItem.classList.toggle('open')

        const faqQuestionHeight = faqItem.children[0].clientHeight
        const faqAnswerHeight = faqItem.children[1].clientHeight

        let isOpened = faqItem.classList.contains('open')
        if (isOpened) {
            faqItem.style.height = `${faqQuestionHeight + faqAnswerHeight + questionPadding}px`
        }
    })
})

const statsSlider = new Swiper('.stats-slider', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.stats-slider-pagination',
        bulletClass: 'stats-slider-pagination-bullet',
        bulletActiveClass: 'stats-slider-pagination-bullet--active',
    },
});

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