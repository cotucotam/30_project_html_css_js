let upload = document.querySelector('#mypicture')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')
upload.addEventListener('change', function (e) {
    // console.log(1, upload.files[0])
    var file = upload.files[0]
    if (!file)
        return

    if (!file.name.endsWith('.gif')) {
        console.log('ko hop le')
        error.innerHTML = `khong hop le`
        return
    } else {
        error.innerHTML = ``
    }
    if (file.size / 1024 / 1024 > 5) {
        console.log('ko hop le')
        error.innerHTML = `file lon hon 5MB`
        return
    } else {
        error.innerHTML = ``
    }
    var img = document.createElement('img')
    // img.src = URL.createObjectURL(upload.files[0])
    // preview.appendChild(img)

    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onloadend = function (e) {
        console.log('load end', e.target.result)
        img.src = e.target.result

    }
    fileReader.onload = function (e) {
        console.log('loading')
    }
    preview.appendChild(img)

})