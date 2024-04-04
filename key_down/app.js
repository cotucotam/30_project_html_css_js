var eCode = document.querySelector('.card.code p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eLocation = document.querySelector('.card.location p:last-child')
var eKey = document.querySelector('.card.key p:last-child')
var eAlert = document.querySelector('.alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')
document.addEventListener('keydown', e => {
    eKey.innerText = e.key
    eWhich.innerText = e.which
    eLocation.innerText = e.location
    eCode.innerText = e.code
    result.innerHTML = e.code

    eAlert.classList.add('hide')
    box.classList.remove('hide')
})