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

// BARCHART
const barchartCtx = document.getElementById('barchart');

const barchartData = [
    { date: '03.03', value: 60 },
    { date: '03.03', value: 120 },
    { date: '03.03', value: 90 },
    { date: '03.03', value: -80 },
    { date: '03.03', value: 270 },
    { date: '03.03', value: 50 },
    { date: '03.03', value: 70 },
]

const getDataBackgroundColors = (data) => {
    backgroundColors = []
    data.forEach((data) => {
        if (data.value > 0) {
            backgroundColors.push('#00FF85')
        } else {
            backgroundColors.push('#FF4646')
        }
    })

    return backgroundColors
}

const handleResize = (barchart) => {
    barchart.resize();
}

new Chart(barchartCtx, {
    type: 'bar',
    data: {
        labels: barchartData.map(dataX => dataX.date),
        datasets: [{
            data: barchartData.map(dataY => dataY.value),
            backgroundColor: getDataBackgroundColors(barchartData),
            borderRadius: 5,
            barPercentage: 0.3,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        onResize: handleResize,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawTicks: false,
                    drawOnChartArea: false
                },
            },
            y: {
                type: 'linear',
                min: -100,
                max: 300,
                position: 'left',
                grid: {
                    color: '#676767',
                    drawTicks: false,
                }
            }
        },
        layout: {
            padding: 0
        }
    }
});

// LINECHART
const linechartCtx = document.getElementById('linechart');

const linechartData = [
    { date: '03.03', value: -40 },
    { date: '03.03', value: 40 },
    { date: '03.03', value: 120 },
    { date: '03.03', value: 50 },
    { date: '03.03', value: 180 },
    { date: '03.03', value: 30 },
    { date: '03.03', value: 230 },
]

const handleResizeLine = (linechart) => {
    linechart.resize();
}

new Chart(linechartCtx, {
    type: 'line',
    data: {
        labels: linechartData.map(dataX => dataX.date),
        datasets: [{
            data: linechartData.map(dataY => dataY.value),
            backgroundColor: '#C1A875',
            borderColor: '#C1A875',
            pointRadius: 5,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        onResize: handleResizeLine,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawTicks: false,
                    drawOnChartArea: false,
                },
            },
            y: {
                type: 'linear',
                min: -100,
                max: 300,
                position: 'left',
                grid: {
                    color: '#676767',
                    drawTicks: false,
                }
            }
        },
        layout: {
            padding: 0
        }
    },
})

// DOUGHTNUT
const doughtnutCtx = document.getElementById('doughtnut');

new Chart(doughtnutCtx, {
    type: 'doughnut',
    data: {
        labels: ['PNL', 'Tether', 'Solana'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [50, 25, 25],
                backgroundColor: [
                    '#FFF4B8',
                    '#C1A875',
                    '#676767'
                ],
                borderWidth: 0,
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            }
        },
        cutout: 100,
    },
})