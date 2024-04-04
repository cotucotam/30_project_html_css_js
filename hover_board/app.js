var body = document.querySelector('.container')
var square = document.createElement('div')
square.classList.add('square')

for (let i = 0; i < 200; i++) {
    var square = document.createElement('div')
    square.classList.add('square')
    body.appendChild(square)


    square.addEventListener('mouseenter', function (e) {
        let el = e.currentTarget
        let randomColor = setColor()
        el.style.background = `${randomColor}`
        el.style.boxShadow = `0 0 10px ${randomColor},0 0 100px ${randomColor}`
    })
    square.addEventListener('mouseleave', function (e) {
        let el = e.currentTarget
        el.style.background = "#1d1d1d"
        el.style.boxShadow = '0 0 2px #000'
    })
}
function setColor() {
    var charColor = '0123456789ABCDEF'
    var color = '#'
    for (let i = 0; i < 6; i++) {
        color += charColor[Math.floor(Math.random() * charColor.length)]
    }
    return color
}