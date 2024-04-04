var video = document.querySelector('video')
var play = document.querySelector('.play')
var timer = document.querySelector('.timer')
var progressFilled = document.querySelector('.progress-filled')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var volume = document.querySelector('.volume')
var volumeIcon = document.querySelector('.volume i')
var volInput = document.querySelector('.volume input')
var volCache = 0
function togglePlay() {
    if (video.paused) {
        video.play()
        play.innerHTML = `<i class='bx bx-pause' ></i>`
    }
    else {
        video.pause()
        play.innerHTML = `<i class='bx bx-play' ></i>`
    }
}
function skip(skipTime) {
    video.currentTime += skipTime
}
function updateTimer() {
    timer.innerHTML = timeToMMSS(video.currentTime) + '/' + timeToMMSS(video.duration)
    let percentProgress = Math.floor(video.currentTime / video.duration * 100)
    // console.log(percentProgress)
    progressFilled.style.width = `${percentProgress}%`
}
function timeToMMSS(second) {
    let min = Math.floor(second / 60)
    let sec = Math.floor(second % 60)
    return `${min}:${sec}`
}
play.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('timeupdate', updateTimer)
prev.addEventListener('click', function () {
    skip(-10)
})
next.addEventListener('click', function () {
    skip(+10)
})
function updateVolume() {
    if (video.volume == 0) {
        // volumeIcon.outerHTML = `<i class='bx bx-volume-mute' ></i>`
        volumeIcon.classList.remove('bx-volume-full')
        volumeIcon.classList.add('bx-volume-mute')
    }
    else {
        // volumeIcon.outerHTML = `<i class='bx bx-volume-full'></i>`
        volumeIcon.classList.remove('bx-volume-mute')
        volumeIcon.classList.add('bx-volume-full')
    }
}
volInput.addEventListener('change', function () {
    video.volume = this.value
    volCache = this.value
    updateVolume()
})
volumeIcon.addEventListener('click', function () {
    if (video.volume == 0) {
        video.volume = volCache
        volInput.value = volCache
    } else {
        video.volume = 0
        volInput.value = 0
    }
    updateVolume()
})