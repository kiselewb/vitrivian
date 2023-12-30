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