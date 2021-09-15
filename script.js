var box = document.getElementById("box")
function funkcja()
{
    kolor_R = Math.random()*255
    kolor_G = Math.random()*255
    kolor_B = Math.random()*255
    kolor_R = Math.ceil(kolor_R)
    kolor_G = Math.ceil(kolor_G)
    kolor_B = Math.ceil(kolor_B)
    box.style.background = "rgb(255,b2,72)"
}