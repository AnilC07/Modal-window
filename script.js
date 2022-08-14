'use strict';

let modalsBtn = document.querySelectorAll('.show-modal');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let closeModalBtn = document.querySelector('.close-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

modalsBtn.forEach(modalBtn => {
  modalBtn.addEventListener('click', openModal);
});

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.code == 'Escape') {
    closeModal();
  }
});
