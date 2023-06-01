const modal = document.getElementById('modal');
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


// window.addEventListener('resize', function() {
//   alert('Viewport width: ' + window.innerWidth);
// });


