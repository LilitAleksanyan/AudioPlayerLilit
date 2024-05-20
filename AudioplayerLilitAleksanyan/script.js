let data = {
    title: [
        "If you go",
        "Last chance to love",
        "Hotel Rendezvous",
        "Daisy",
        "Nare"
    ],
    song: [
        "music/Nemra - If you go (www.mp3erger.ru) 2023.mp3",
        "music/nemra_-_last_chance_to_love_(z3.fm).mp3",
        "music/Мот & MeMaria - Hotel Rendezvous (1).mp3",
        "music/2e849b6a74592e9a96506acec6b3587c_nemra-daisy.mp3",
        "music/Nemra - Nare (Original Instrumental, Karaoke, Minus) 2020.mp3",
    ],
    poster: [
        "https://i.ytimg.com/vi/8Gy2ZDGLteQ/sddefault.jpg",
        "https://i1.sndcdn.com/artworks-000133937425-n6zixi-t500x500.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2glJgJADyP3u6nFHWJ8kbkonr268EA-aF-OaG4Hyyw&s",
        "https://images.genius.com/62d7ead5a96680000bb8458179f4ca55.592x592x1.png",
        "https://i.ytimg.com/vi/nwdGPR_JPao/maxresdefault.jpg",
    ]
}
let song = new Audio()

window.onload = function () {
    playSong()

}
let currentSong = 0
function playSong() {
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    let main = document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong] + ")"
    console.log(main[0]);
    song.play()

}
function playOrPauseSong() {
    let play = document.getElementById("play")
    if (song.paused) {
        song.play()
        play.src = "images/pause.png"

    } else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"
    }
}
song.addEventListener("timeupdate", function () {
    let fill = document.getElementsByClassName("fill")
    let position = song.currentTime / song.duration
    fill[0].style.marginLeft = position * 99 + "%"

    convertTime(song.currentTime)
    if (song.ended) {
        next()
    }

})


function convertTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    currentTime[0].textContent = min + ":" + sec
    totalTime(Math.round(song.duration))
}

function totalTime(seconds) {
    let currentTime = document.getElementsByClassName("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    currentTime[0].textContent += " / " + min + ":" + sec
}

function prev() {
    currentSong--
    if (currentSong < 0) {
        currentSong = data.song.length - 1

    }
    playSong()
    play.src = "images/pause.png"


}


function next() {
    currentSong++
    let play = document.getElementById("play")
    if (currentSong == data.song.length) {
        currentSong = 0

    }
    playSong()
    play.src = "images/pause.png"

}

function mute() {
    let mute = document.getElementsById("mute")
    if (song.muted) {
        song.muted = false
        mute.src = "images/volume.png"
    } else {
        song.muted = true
        mute, src = "images/volume-mute.png"
    }
}

function decrease() {
    song.volume -= 0.2
    if (song.volume <= 0.1) {
        mute.src = "images/volume-mute.png"
    }
}

function increase() {
    song.volume += 0.2
    if (song.volume <= 0.2) {
        mute.src = "images/volume.png"
    }
}


let audio = document.getElementById("audio");
let repeatBtn = document.getElementById("repeatButton");
console.log(repeatBtn);
repeatBtn.addEventListener("click", function () {
    if (song.loop) {
        song.loop = false;
        repeatBtn.textContent = "Repeat";
    
}else {
    song.loop = true;
    repeatBtn.textContent = "Stop Repeat";

}
})
//final