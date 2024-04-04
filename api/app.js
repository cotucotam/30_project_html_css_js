var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.contry')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var eye = document.querySelector('.eye span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')


async function changeWeatherUI() {

    let capitalSearch = search.value.trim()
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=0b61f0471ea4b1fff0e9b784a5e5b34b`

    let data = await fetch(apiUrl).then(res => res.json())
    console.log(data)
    if (data.cod == 200) {
        content.classList.remove('hide')
        console.log(data)
        city.innerText = data.name
        country.innerText = data.sys.country
        console.log(data.main.temp)
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        temp = Math.round(data.main.temp - 273.15)
        value.innerText = temp
        body.setAttribute('class', 'hot')
        if (temp <= 25) {
            body.setAttribute('class', 'warm')
        }
        if (temp < 22) {
            body.setAttribute('class', 'cold')
        }
        if (temp < 19) {
            body.setAttribute('class', 'cold')
        }
        console.log(body)
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleDateString('vi')
    } else {
        content.classList.add('hide')
    }

}

search.addEventListener('keypress', function (e) {
    console.log(e.code);
    if (e.code === 'Enter') {
        changeWeatherUI()
    }
})