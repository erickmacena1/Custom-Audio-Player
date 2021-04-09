const music = document.getElementById("mcPozeDoRodo")
const buttons = Array.from(document.getElementsByClassName("audioBtn"))
let [decrease, increase, play, stop, volume] = buttons
let audioCountdown = document.getElementsByClassName("audioTime")[0]

function start()
{
    const musicDuration = music.duration
    music.volume = 0.6

    play.addEventListener("click", playBtnClick)
    stop.addEventListener("click", stopBtnClick)

    window.alert("AINDA TA EM CONSTRUÇÃO MIZERA. Mas aceito criticas :)")
}

function playBtnClick()
{
    if(play.dataset.state == 0)
    {
        music.play()
        play.src = "assets/images/070-pause button.svg"
        play.dataset.state = 1
    }
    else
    {
        music.pause()
        play.src = "assets/images/072-play button.svg"
        play.dataset.state = 0
    }
}

function stopBtnClick()
{
    if(play.dataset.state == 1)
    {
        music.pause()
        play.src = "assets/images/072-play button.svg"
        play.dataset.state = 0
        music.currentTime = 0
    }
    
}

function howThisWorks()
{
    while(audioCountdown.dataset.counting == "true")
    {
        console.log("Está tocando")
    }
}
