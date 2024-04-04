var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var btnClose = document.querySelector('.modal__header i')
var iconClose = document.querySelector('.modal__footer button')

function toggleModal(e) {
    console.log(e.target)
    modal.classList.toggle('hide')
}
btnOpen.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
modal.addEventListener('click', (e) => {
    if (e.target == e.currentTarget) {
        console.log('tam')
        toggleModal(e)
    }
})