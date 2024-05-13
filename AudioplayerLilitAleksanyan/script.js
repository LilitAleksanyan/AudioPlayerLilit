let data = {
    title : [
        "If you go",
        "Last chance to love",
        "Hotel Rendezvous",
        "Daisy",
        "Nare"
    ],
    song : [
        "music/Nemra - If you go (www.mp3erger.ru) 2023.mp3", 
        "music/nemra_-_last_chance_to_love_(z3.fm).mp3",
        "music/Мот & MeMaria - Hotel Rendezvous (1).mp3",
        "music/2e849b6a74592e9a96506acec6b3587c_nemra-daisy.mp3",
        "music/Nemra - Nare (Original Instrumental, Karaoke, Minus) 2020.mp3",
    ],
    poster :["https://i.ytimg.com/vi/8Gy2ZDGLteQ/sddefault.jpg",
             "https://i1.sndcdn.com/artworks-000133937425-n6zixi-t500x500.jpg",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2glJgJADyP3u6nFHWJ8kbkonr268EA-aF-OaG4Hyyw&s",
             "https://images.genius.com/62d7ead5a96680000bb8458179f4ca55.592x592x1.png",
             "https://i.ytimg.com/vi/nwdGPR_JPao/maxresdefault.jpg",
]
}
let song = new Audio()

window.onload = function (){
    playSong()

}
let currentSong = 0
function playSong(){
    song.src = data.song[currentSong]
    let songTitle = document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img = document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url(" + data.poster[currentSong]+")"
    let main = document.getElementsByClassName("row1")
    main[0].style.backgroundImage = "url(" + data.poster[currentSong]+")"
song.play()

}
function  playOrPauseSong(){
    let play = document.getElementById("play")
    if(song.paused){
        song.play()
        play.src = "image/pause.png"
    }else{
        play.src = "image/play-button-arrowhead.png"
    }
}
song.addEventListener("timeupdate",function(){
    let fill = document.getElementsByClassName("fill")
    let position = song.currentTime/song.duration
    fill[0].style.width.marginLeft = position * 99 +"%"
})
