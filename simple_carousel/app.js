const wrapper = document.querySelector('.wrapper')
let isMouseDown = false
let startX, scrollLeft

wrapper.addEventListener('mousedown', (e) => {
    isMouseDown = true
    startX = e.pageX - wrapper.offsetLeft
    scrollLeft = wrapper.scrollLeft
    console.log(scrollLeft)
})

wrapper.addEventListener('mouseleave', () => {
    isMouseDown = false
})

wrapper.addEventListener('mouseup', () => {
    isMouseDown = false
})

wrapper.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return
    const x = e.pageX - wrapper.offsetLeft
    // console.log(e.pageX, wrapper.offsetLeft)
    const walk = (x - startX) * 3
    wrapper.scrollLeft = scrollLeft - walk
})
