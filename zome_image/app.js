
// var result = document.querySelector('#result')
// document.addEventListener('mousemove', function (e) {

// })

var imgList = document.querySelectorAll('.zoomer img')
var mirror = document.querySelector('#mirror')
var scope = 4
imgList.forEach(function (img) {
    img.addEventListener('mousemove', function (e) {
        mirror.classList.remove('hide')
        mirror.style.top = `${e.clientY}px`
        mirror.style.left = `${e.clientX}px`
        let w = this.offsetWidth
        let h = this.offsetHeight

        let mouseWithImgBorderX = e.pageX - this.offsetLeft
        let mouseWithImgBorderY = e.pageY - this.offsetTop

        let percentMousebyW = (mouseWithImgBorderX) / w * 100
        let percentMousebyY = (mouseWithImgBorderY) / h * 100
        console.log(percentMousebyW, percentMousebyY)

        mirror.style.backgroundPosition = `${percentMousebyW}% ${percentMousebyY}%`

        var imgSrc = e.target.getAttribute('src')
        mirror.style.backgroundImage = `url(${imgSrc})`
    })
    img.addEventListener('mouseleave', function (e) {
        mirror.classList.add('hide')
    })
})
