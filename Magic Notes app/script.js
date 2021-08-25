showNotes();
// if student adds a note add it to the localStorage

const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    let addTitle = document.getElementById('addTitle');
    let addNote = document.getElementById('addNote');
    let myNotes = localStorage.getItem('notes');
    if(myNotes==null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(myNotes);
    }
    let myObj = {
        title: addTitle.value,
        note: addNote.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle.value = '';
    addNote.value = '';
    showNotes();
});

// function to show elements from localStorage
function showNotes(){
let myNotes = localStorage.getItem('notes');
if (myNotes == null){
    notesObj = [];
}else{
    notesObj = JSON.parse(myNotes);
}
let html="";
notesObj.forEach((element,index) => {
    html += `
            <div class="list-body">
                <h3 class="cardTitle">
                <span id="index">Note${index + 1}. &nbsp &nbsp </span> ${element.title}
                </h3>
                <p> ${element.note}</p>
                <button id="dltBtn" onclick="deleted(${index})">Delete Note</button>
            </div>
    `;
});
let notesElm = document.getElementById("notes");
if(notesObj.length != 0){
    notesElm.innerHTML = html;
}else{
    notesElm.innerHTML = `Nothing to show! use "Add a Note" section above to add notes.`;
}
}

// deleting a note
function deleted(itemIndex){
    // console.log('delete', itemIndex)
    let myNotes = localStorage.getItem('notes');
    notesObj = JSON.parse(myNotes);
    // delete itemIndex element from the array
    notesObj.splice(itemIndex, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

//clearing notes

function clearStorage(){
    if(confirm('Are you sure you wanna delete your notes?')){
        localStorage.clear();
        showNotes();
    }
}

// search a note
let search = document.getElementById('search');
search.addEventListener('input', function(){
    let inputText = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName('list-body');
    Array.from(noteCard).forEach(element =>{
        let cardText = element.getElementsByTagName('p')[0].innerText;
        if(cardText.includes(inputText)){
            element.style.display = 'block';
        }else{
            element.style.display = 'none';
        }
    })
})