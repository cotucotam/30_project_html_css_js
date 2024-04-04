// var mockData = [{
//     name: 'SP 1',
//     price: 999,
//     picture: ''
// }]
fetch('http://fakestoreapi.com/products')
    .then(res => {
        return res.json()
    })
    .then(mockData => {
        console.log(mockData)
        var products = document.querySelector('.products')
        //init
        products.innerHTML = ''
        mockData.forEach(item => {
            //     <div class="product">
            //     <img src="1.png" alt="">
            //     <div class="info">
            //         <div class="name">SP1</div>
            //         <div class="price">99</div>
            //     </div>
            // </div>
            var newProduct = document.createElement('div')
            newProduct.classList.add('product')
            newProduct.innerHTML = `
                <img src="${item.image}" alt="">
                <div class="info">
                    <div class="name">${item.title}</div>
                    <div class="price">${item.price}</div>
                </div>
                `
            products.appendChild(newProduct)
        })
    })

var searchInput = document.querySelector('.search input')
searchInput.addEventListener('input', function (e) {
    let txtSearch = e.target.value.trim().toLowerCase()
    let listProductDOM = document.querySelectorAll('.product')
    listProductDOM.forEach(item => {
        console.log(item.innerText.toLowerCase().includes(txtSearch))
        if (item.innerText.toLowerCase().includes(txtSearch)) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
})


