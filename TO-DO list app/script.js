function getAndUpdate(){
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;

    if(localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }else{
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    update();
}
function update(){
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }else{
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
// populate the table
let tableBody = document.getElementById('tableBody');
let str = "";
itemJsonArray.forEach((element, index) => {
    str += `
        <tr>
            <th>${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="dlt" onclick="deleted(${index})">Delete</button></td>
        </tr>
    `    
});
tableBody.innerHTML = str;
}

let add = document.getElementById("add");
add.addEventListener('click', getAndUpdate);
update();

function deleted(itemIndex){
    console.log("delete",itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    
    // delete itemindex element from the array

    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();
}

function clearStorage(){
    if (confirm("Do you really want to clear lists?")){
        localStorage.clear();
        update();
    }
}