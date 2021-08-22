const colorCode = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];
const btnChangeColor = document.getElementById("changeColor");
const hexSpan = document.getElementById("hex");
const bodyBcg = document.querySelector("body");
const heading = document.getElementById("heading");

btnChangeColor.addEventListener('click', () => {
    let hexColor = "#";
    for(let i = 0; i<6; i++){
        let generateColor = Math.floor(Math.random()*colorCode.length);
        hexColor += colorCode[generateColor];
        hexSpan.innerHTML = hexColor;
        bodyBcg.style.backgroundColor = hexColor;
        heading.style.color = hexColor;
        
        console.log(generateColor, hexColor);
    }
})