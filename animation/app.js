let btnSuccess = document.querySelector('.control .success')
let btnWarming = document.querySelector('.control .warming')
let btnError = document.querySelector('.control .error')

btnSuccess.addEventListener('click', function () {
    createToast('success')
})
btnWarming.addEventListener('click', function () {
    createToast('warming')
})
btnError.addEventListener('click', function () {
    createToast('error')
})

function createToast(status) {

    // <div class="toast warming">
    //     
    //     <span class="countdown"></span>
    // </div>
    // <div class="toast error">
    //     
    //     <span class="message">This is a error message</span>
    //     <span class="countdown"></span>
    // </div>
    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    let templateInner = ``
    switch (status) {
        case 'warming':
            templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>`
            break;
        case 'error':
            templateInner = `<i class="fa-solid fa-xmark"></i>`
            break;
        case 'success':
            templateInner = `<i class="fa-solid fa-check"></i>`
            break;

    }

    toast.innerHTML = `
       ${templateInner}
        <span class="message">This is a ${status} message</span>
        <span class="countdown"></span>
    `
    var toastList = document.getElementById('toasts')
    toastList.appendChild(toast)

    setTimeout(function () {
        toast.style.animation = 'slide_hide 2s ease forwards'
    }, 4000)
    setTimeout(function () {
        toast.remove()
    }, 6000)
}