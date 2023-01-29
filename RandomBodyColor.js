const button = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");
function randomNumberGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}
// Math.floor(Math.random()*256);
button.addEventListener("click",()=>{
    const randomColor = randomNumberGenerator();
    body.style.background = randomColor;
    currentColor.innerHTML = randomColor;   
})
