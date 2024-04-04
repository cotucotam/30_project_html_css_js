var color = document.querySelector('#color')
var eraser = document.querySelector('#eraser')
var decrease = document.querySelector('#decrease')
var increase = document.querySelector('#increase')
var sizeEl = document.querySelector('#size')
var save = document.querySelector('#save')
var clear = document.querySelector('#clear')
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')



var currentPos = {
    x: 0,
    y: 0
}
var currentPosAfter = {
    x: 0,
    y: 0
}
var isDraw = false
var colorPaint = '#000000'
var size = 5

sizeEl.innerText = size

document.addEventListener('mousedown', function (e) {
    currentPos = {
        x: e.offsetX,
        y: e.offsetY
    }
    isDraw = true
})
document.addEventListener('mousemove', function (e) {

    if (isDraw) {
        currentPosAfter = {
            x: e.offsetX,
            y: e.offsetY
        }

        ctx.beginPath()
        ctx.arc(currentPos.x, currentPos.y, size, 0, 2 * Math.PI)
        ctx.fillStyle = colorPaint
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(currentPos.x, currentPos.y)
        ctx.lineTo(currentPosAfter.x, currentPosAfter.y)
        ctx.strokeStyle = colorPaint
        ctx.lineWidth = size * 2
        ctx.stroke()
        currentPos = {
            x: e.offsetX,
            y: e.offsetY
        }
    }

})
document.addEventListener('mouseup', function (e) {
    isDraw = false
})
color.addEventListener('change', function (e) {
    colorPaint = e.target.value
})
eraser.addEventListener('click', function () {
    colorPaint = '#ffffff'
})
decrease.addEventListener('click', function () {
    if (size > 5) {
        size -= 5
    }
    else {
        size = 5
    }
    sizeEl.innerText = size
})
increase.addEventListener('click', function () {
    if (size > 30) {
        size = 30
    }
    else {
        size += 5
    }
    sizeEl.innerText = size
})
clear.addEventListener('click', function () {
    // ctx.clearRect(0, 0, canvas.height, canvas.width)
    var canvasStats = canvas.getClientRects()[0]
    ctx.clearRect(0, 0, canvasStats.width, canvasStats.height)

})
save.addEventListener('click', function () {
    var output = canvas.toDataURL("image/png");
    console.log(output)
    save.setAttribute('href', output)

})