let firstTime = localStorage.getItem("FirstTime")
const music = document.getElementById("mcPozeDoRodo")
const buttons = Array.from(document.getElementsByClassName("audioBtn"))
let [backwards, forwards, play, stop, volDown, volUp] = buttons
let audioBar = document.getElementsByClassName("musicBar")[0]
let musicTimer = document.getElementsByClassName("audioTime")[0]
let musicDuration
let interval
let currentTime = 0

function start()
{
    musicDuration = music.duration

    play.addEventListener("click", playBtnClick)
    stop.addEventListener("click", stopBtnClick)
    backwards.addEventListener("click", musicBackwards)
    forwards.addEventListener("click", musicFowards)
    volUp.addEventListener("click", volumeUp)
    volDown.addEventListener("click", volumeDown)
    music.addEventListener("ended", playBtnClick)
}

function playBtnClick()
{
    if(firstTime === null)
    {
        if(confirm("😬Essa música tem alguns palavões no inicio😬\nGostaria de pular eles?"))
        {
            music.currentTime = 26.49
            musicPlayingActions()
        }
        firstTime = 'nop'
        localStorage.setItem("FirstTime", firstTime)  
    }

    if(play.dataset.state == 0)
    {
        music.play()
        play.src = "assets/images/070-pause button.svg";
        play.dataset.state = 1
        interval = setInterval(musicPlayingActions, 500)
    }
    else
    {
        music.pause()
        play.src = "assets/images/072-play button.svg"
        play.dataset.state = 0
        clearInterval(interval)
    }
}

function stopBtnClick()
{

    if(play.dataset.state == 1)
        playBtnClick()
    
    music.currentTime = 0
    musicTimeCounter()
}

function musicFowards()
{
    music.currentTime += 10
    musicPlayingActions()
}
function musicBackwards()
{
    music.currentTime -= 10
    musicPlayingActions()
}

const volumeDown = () => music.volume -= 0.1
const volumeUp = () => music.volume += 0.1

function musicPlayingActions()
{
    currentTime = parseInt(music.currentTime)
    audioBar.value = (currentTime / musicDuration) * 100

    musicTimer.innerText = `${('' + parseInt(currentTime / 60)).padStart(2, '0')}:${('' + currentTime % 60).padStart(2, '0')}`
}
