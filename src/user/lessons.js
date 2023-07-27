document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.2, // Adjust threshold as needed
  });

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });

  if (window.innerWidth <= 580) {
    alert("Sorry, this part of the site is only available on Mobile.");
    window.location.href = "./errors/404.shtml";
  }
});


const tabMenu = document.querySelector(".tab-menu");

// draggable menu
let activeDrag = false;
tabMenu.addEventListener("mousemove", (drag) => {
  if (!activeDrag) return;
  tabMenu.scrollLeft -= drag.movementX;
  tabMenu.classList.add("dragging");
});

document.addEventListener("mouseup", () => {
  activeDrag = false;
  tabMenu.classList.remove("dragging");
});

tabMenu.addEventListener("mousedown", () => {
  activeDrag = true;
});

const tabs = document.querySelectorAll(".tab"); // Changed from '.tabs' to '.tab'
const tabBtn = document.querySelectorAll(".tab-btn");

const tab_Nav = function (tabBtnClick) {
  tabBtn.forEach((tabBtn) => {
    tabBtn.classList.remove("active");
  });

  tabs.forEach((tab, i) => {
    tab.classList.remove("active");
    if (i === tabBtnClick) {
      tab.classList.add("active");
    }
  });

  tabBtn[tabBtnClick].classList.add("active");
};

// Set the first tab as active by default
tab_Nav(0);

tabBtn.forEach((tabBtn, i) => {
  tabBtn.addEventListener("click", () => {
    tab_Nav(i);
  });
});

const selectElement = (element) => document.querySelector(element);
selectElement('.menu-icons').addEventListener('click', () =>{
          selectElement('nav').classList.toggle('active-nav');
})


// Get the navbar and banner elements
const navbar = document.querySelector('#nav');
const header = document.querySelector('.header');
const banner = document.querySelector('.banner');

// Set the initial scroll position to the top of the page
let prevScrollPos = window.scrollY;

// Listen for the scroll event on the window object
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const currentScrollPos = window.srcollY;

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

const openNav = () => {
  navbar.classList.add("active-nav")
  navbar.classList.add("show")

};

const closeNav = () => {
  navbar.classList.remove("active-nav")
  navbar.classList.add("show")

};


