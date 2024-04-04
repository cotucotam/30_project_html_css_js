var switchBtn = document.querySelector('label')
var body = document.querySelector('body')

function init() {
    let mode = localStorage.getItem('mode') ? "dark" : ""
    body.setAttribute('class', mode)
}
init()
switchBtn.addEventListener('click', function () {

    body.classList.toggle('dark')
    let mode = body.getAttribute('class') ? 'dark' : ''
    localStorage.setItem('mode', mode)
})