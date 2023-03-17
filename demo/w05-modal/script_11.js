'use strict';

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const esc = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log('modal', modal);
console.log('show-modal', btnsOpenModal);


const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () => {
    modal.forEach((item) => {
        item.classList.add('hidden');
    })
    console.log('close.')
    overlay.classList.add('hidden');
    console.log('This section has been closed.');
}


for(let i=0; i<btnsOpenModal.length; i++ ){
    btnsOpenModal[i].addEventListener('click', ()=> {
        console.log(modal[i]);
        modal[i].classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

for(let i=0; i<btnCloseModal.length; i++ ){
    btnCloseModal[i].addEventListener('click', ()=> {
        console.log(modal[i]);
        modal[i].classList.add('hidden');
        overlay.classList.add('hidden');
    });
}


overlay.addEventListener('click',closeModal);


//click滑鼠事件
document.addEventListener('keydown', (e) =>{
    if (e.key ==='Escape' && !overlay.classList.contains('hidden')){
        closeModal();
    }
});