
let color = ['seagreen', 'orange', 'brown', 'grey', 'skyblue', 'wheat'];
let btn = document.getElementById("btn");
let bodybcg = document.querySelector('body');

let btnclick = () => {
    let changeColor = Math.floor(Math.random()*color.length);
    bodybcg.style.backgroundColor = color[changeColor];
    // console.log(changeColor, bodybcg.style.backgroundColor)
}