var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')
function showError(input, message) {
    console.log(input.parentElement.querySelector('small'))
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    console.log(input.parentElement.querySelector('small'))
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput) {
    let isEmptyError = false
    listInput.forEach(input => {
        input.value = input.value.trim()
        if (!input.value) {
            isEmptyError = true
            showError(input, 'Không được để trống')
        } else {
            showSuccess(input)
        }
    })
    return isEmptyError
}

function checkEmailError(input) {
    const regexEmail = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i
    input.value = input.value.trim()
    let isEmailError = regexEmail.test(input.value)
    if (isEmailError) {
        showSuccess(input)
    } else {
        showError(input, 'Email Invalid')
    }
    return isEmailError

}

function checkLengthError(input, min, max) {
    input.value = input.value.trim()
    if (input.value.length < min) {
        showError(input, `Kí tự tối đa phải có ít nhất ${min} kí tự`)
        return true
    }
    else if (input.value.length > max) {
        showError(input, `Kí tự tối đa phải có ít nhất ${min} kí tự`)
        return true
    } else {
        showSuccess(input)
        return false
    }

}
function checkMatchPassword(password, repassword) {
    if (password.value !== repassword.value) {
        showError(repassword, 'MK không trung khớp')
        return true
    }
    return false
}
form.addEventListener('submit', function (e) {
    e.preventDefault()//tranh load trang
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isEmailError = checkEmailError(email)
    let isUsernameLengthError = checkLengthError(username, 4, 8)
    let isPasswordLengthError = checkLengthError(password, 4, 8)
    let isMatchError = checkMatchPassword(password, confirmPassword)


})

