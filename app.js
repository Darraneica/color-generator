const color = document.querySelector("body");

function getColor(name){
    color.style.backgroundColor = name;
}

function randomColor(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    color.style.backgroundColor = rgbColor;

}

randomColor();