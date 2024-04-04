var animationElements = document.querySelectorAll('.show-on-scroll')

function toggleAnimationElementInWindow(element) {
    var rect = element.getClientRects()[0]
    var heightScreen = window.innerHeight
    if (!((rect.bottom < 0) || (rect.top > heightScreen))) {
        //trong
        element.classList.add('start')
    } else {
        //ngoai
        element.classList.remove('start')
    }
}

function checkAnimation() {
    animationElements.forEach(el => {
        toggleAnimationElementInWindow(el)
    })




}
window.onscroll = checkAnimation