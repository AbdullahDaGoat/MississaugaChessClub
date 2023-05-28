const navbar = document.querySelector('#nav');
const openNav = () => {
  navbar.classList.add("active-nav")
  // navbar.classList.add("smooth-transition-nav")
};

const closeNav = () => {
  navbar.classList.remove("active-nav")
  // navbar.classList.add("smooth-transition-nav")
};

document.querySelector('.menu').addEventListener('click', openNav);
document.querySelector('.close').addEventListener('click', closeNav);

const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const closeButton = document.querySelector('[data-close-button]');


function openModal() {
    modal.classList.add('active-modal');
    overlay.classList.add('active-modal');
  }
  
  function closeModal() {
    modal.classList.remove('active-modal');
    overlay.classList.remove('active-modal');
  }
  
  window.addEventListener('load', () => {
    openModal();
  });
  
  closeButton.addEventListener('click', closeModal);
  