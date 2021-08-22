let counter = document.getElementById('counter');
let decreaseCounter = document.getElementById('decreaseCounter');
let increaseCounter = document.getElementById('increaseCounter');
let count = 0;

document.body.style.backgroundColor = "rgb(0,112,146)";
counter.style.color = "white";

let decreaseCount = () => {
    count--
    counter.innerHTML = count;
    if(counter.innerHTML < 0){
        counter.style.color = "red";
    }else if(counter.innerHTML === '0'){
        counter.style.color = "white";
    }
}
let increaseCount = () => {
    count++
    counter.innerHTML = count;
    if(counter.innerHTML > 0){
        counter.style.color = "wheat";
    }else if(counter.innerHTML === '0'){
        counter.style.color = "white";
    }
}