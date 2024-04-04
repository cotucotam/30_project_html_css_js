var process = document.querySelector('.process')
var range = document.querySelector('.range')
var value = document.querySelector('.process span')

function updateProcess(percent) {
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
}

range.addEventListener('mousemove', function (e) {
    // console.log(e.pageX - this.offsetLeft)
    var processWidth = e.pageX - this.offsetLeft
    var percent = Math.round(processWidth / this.offsetWidth * 100)
    // console.log(percent)
    updateProcess(percent)

})
updateProcess(30)

var slider = document.getElementById('slider')
slider.addEventListener('change', function (val) {
    console.log(this.value)
})