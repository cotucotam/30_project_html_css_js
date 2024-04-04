// var btnList = document.querySelectorAll('button')
// var imgList = document.querySelectorAll('img')

// btnList.forEach(btn => {
//     btn.addEventListener('click', function (e) {
//         console.log(e.currentTarget.getAttribute('type'))
//         let type = e.currentTarget.getAttribute('type')
//         imgList.forEach(img => {
//             let foodtype = img.getAttribute('type')
//             if (type == 'all' || foodtype == type) {
//                 img.classList.remove('hide')
//             } else {
//                 img.classList.add('hide')
//             }
//         })
//     })
// })
var arr = []
var imgList = document.querySelectorAll('img')
var container = document.querySelector('.food-container')
var btnList = document.querySelectorAll('button')
imgList.forEach(item => {
    arr.push({
        src: item.src,
        type: item.getAttribute('type')
    })
})
console.log(arr)
function activeButton(btnActive) {
    btnList.forEach(btn => {
        btn.classList.remove('active')
    })
    btnActive.classList.add('active')
}
btnList.forEach(btn => {
    btn.addEventListener('click', function (e) {

        activeButton(e.currentTarget)
        let type = e.currentTarget.getAttribute('type')
        console.log(type)
        if (type == 'all') {
            render(arr)
            return
        }
        let filterData = arr.filter(food => {

            return food.type == type
        })

        render(filterData)
    })
})
function render(list) {
    container.innerHTML = ''
    list.forEach(item => {
        let imgEl = document.createElement('img')
        imgEl.src = item.src
        imgEl.setAttribute('type', item.type)
        let divEl = document.createElement('div')
        divEl.classList.add('food')
        divEl.append(imgEl)
        container.append(divEl)
    })
}