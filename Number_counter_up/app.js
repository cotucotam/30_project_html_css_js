// var count = 0
// setInterval(() => {
//     count += 1
//     var fb = document.querySelector('.facebook h2')
//     var yt = document.querySelector('.youtube h2')
//     var tt = document.querySelector('.tiktok h2')
//     fb.innerText = count
//     yt.innerText = count
//     tt.innerText = count
// }, 1)
// var fb = document.querySelector('.facebook h2')
// var yt = document.querySelector('.youtube h2')
// var tt = document.querySelector('.tiktok h2')

// function count(el, to) {
//     var count = 0
//     var time = 17
//     var step = to / time

//     let counting = setInterval(() => {
//         count += step
//         if (count > to) {
//             clearInterval(counting)
//             el.innerText = to
//         }
//         else {
//             el.innerText = Math.round(count)
//         }
//     }, 1)
// }

// count(fb, 3300)
// count(yt, 905)
// count(tt, 1501)
var listCounter = document.querySelectorAll('.counter')


function count(el) {
    var count = 0
    var time = 114
    var numberEl = el.querySelector('.number')
    var to = parseInt(numberEl.innerText)
    var step = to / time

    let counting = setInterval(() => {
        count += step
        if (count > to) {
            clearInterval(counting)
            numberEl.innerText = to
        }
        else {
            numberEl.innerText = Math.round(count)
        }
    }, 1)
}

listCounter.forEach(item => {
    count(item)
})
