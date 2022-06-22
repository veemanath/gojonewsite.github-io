const popCat =  document.querySelector("#popcat")
const btn = document.querySelector("#btn")

const openMouthImg = "./image/open.png"
const closeMouthImg = "./image/close.png"

const openMouthSound = new Audio("/sound/sound_sound-open.mp3")
const closrMouthSOund = new Audio("./sound/sound_sound-close.mp3")

btn.addEventListener("mousedown", openMouth)
btn.addEventListener("mouseup", closeMouth)

btn.addEventListener("touchstart", function(e){
    e.preventDefault()
    openMouth()
})

btn.addEventListener("touchend",function(e) {
    e.preventDefault()
    closeMouth()
})


btn.addEventListener("touchend",closeMouth)

function openMouth(){
    popCat.src = openMouthImg
    openMouthSound.play()
}
function closeMouth(){
    popCat.src = closeMouthImg
    closrMouthSOund.play()
}