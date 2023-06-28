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
// Relevant JavaScript
const navBar = document.querySelector(".nav-stuff");
const menuBtn = document.querySelector(".menu-icon");
const navLinks = document.querySelectorAll(".nav-link");
const articles = document.querySelectorAll("article");

menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    showArticle(index);
  });
});

function showArticle(index) {
  articles.forEach((article, idx) => {
    if (idx === index) {
      article.classList.add("show");
      article.style.animation = "slide-in 0.3s forwards";
    } else if (article.classList.contains("show")) {
      article.style.animation = "slide-out 0.3s forwards";
      setTimeout(() => {
        article.classList.remove("show");
      }, 500);
    }
  });
}




// ...

    // Open appropriate Section



