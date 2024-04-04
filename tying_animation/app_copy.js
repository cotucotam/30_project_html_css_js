var p = document.querySelector('.typing-wrapper p')
var originContent = p.innerHTML
var index = 0
var isForward = true
var time = 400
setInterval(() => {
    if (isForward) {
        index++
    } else {
        index--
    }
    if (index == originContent.length) {
        isForward = false
        time = 50
    } else if (index <= 0) {
        isForward = true
        time = 400
    }
    p.innerHTML = originContent.substring(0, index)
}, time)
