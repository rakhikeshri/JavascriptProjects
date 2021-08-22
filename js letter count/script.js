let textarea = document.getElementById('textarea');
let counter = document.getElementById("counter");

let countChars = () =>{
    counter.innerHTML = textarea.value.length;
} 