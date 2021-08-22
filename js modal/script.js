const modal = document.querySelector('#background');
const showBtn = document.querySelector('#showBtn');
const closeBtn = document.querySelector('#close');

showBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outerClick);

function showModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outerClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

