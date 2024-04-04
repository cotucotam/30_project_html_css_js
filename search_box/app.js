var btnSearch = document.querySelector('.search-box__btn')
btnSearch.addEventListener('click', function () {
    this.parentElement.classList.toggle('open')
    console.log(this.parentElement)
    // Điều này giúp chuyển trọng tâm (focus) vào trường tìm kiếm khi nút được nhấp vào, 
    // giúp người dùng có thể bắt đầu nhập nội dung ngay lập tức 
    // mà không cần phải nhấp vào trường tìm kiếm một lần nữa.
    this.previousElementSibling.focus()
})