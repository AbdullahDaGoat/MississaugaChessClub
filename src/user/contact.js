const selectElement = (element) => document.querySelector(element);
selectElement('.menu-icons').addEventListener('click', () => {
  selectElement('#nav').classList.toggle('active-nav');
});

// Get the navbar and banner elements
const navbar = document.querySelector('#nav');
const header = document.querySelector('.header');
const banner = document.querySelector('.banner');

// Set the initial scroll position to the top of the page
let prevScrollPos = window.scrollY;

// Listen for the scroll event on the window object
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const currentScrollPos = window.scrollY;

  // Determine the scroll direction
  const isScrollingDown = currentScrollPos > prevScrollPos;

  // Toggle the visibility of the navbar, header and banner based on the scroll direction
  if (isScrollingDown) {
    navbar.classList.remove('show');
    navbar.classList.add('hidden');
    header.classList.add('color');
    banner.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
    navbar.classList.add('show');
    header.classList.remove('color');
    banner.classList.remove('hidden');
  }

  // Update the previous scroll position
  prevScrollPos = currentScrollPos;
});


// Actual JS:
