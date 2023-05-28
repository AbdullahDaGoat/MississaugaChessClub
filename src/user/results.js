// Contents
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
// Buttons
const btn1 = document.getElementById("tab-btn-1");
const btn2 = document.getElementById("tab-btn-2");



btn1.addEventListener("click", function() {
  content1.style.transform = "translateX(0)";
  content2.style.display = "none";
  btn1.style.color = "#9c5200";
  btn2.style.color = "#000";
  document.getElementById("content1").classList.add("animation");
  document.getElementById("content2").classList.remove("animation");
  console.log("clicked")
});


btn2.addEventListener("click", function() {
    content1.style.display = "none";
    content2.style.transform = "translateX(0)";
    btn2.style.color = "#aa6c26";
    btn1.style.color = "#000";
    document.getElementById("content1").classList.remove("animation");
    document.getElementById("content2").classList.add("animation");
    console.log("clicked")
});

const navbar = document.querySelector('#nav');
const openNav = () => {
  navbar.classList.add("active-nav")
  navbar.classList.add("show")

};

const closeNav = () => {
  navbar.classList.remove("active-nav")
  navbar.classList.add("show")

};

document.querySelector('.menu').addEventListener('click', openNav);
document.querySelector('.close').addEventListener('click', closeNav);


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




  const tabBtns = document.querySelectorAll('.btn-results-tab');
  const tabContents = document.querySelectorAll('.content');

  function displayContent(content) {
    content.style.display = 'block';
  }

  tabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      const tabNum = tabBtn.classList[1].slice(-1);
      const contentNum = `content${tabNum}`;
      const content = document.getElementById(contentNum);
      displayContent(content);
    });
  });

  const toggleEls = document.querySelectorAll('.tabs__toggle');

  toggleEls.forEach((toggleEl) => {
    toggleEl.addEventListener('click', () => {
      const tabsEl = toggleEl.parentNode.parentNode;
      const activeEls = tabsEl.querySelectorAll('.is-active');
      activeEls.forEach((activeEl) => {
        activeEl.classList.remove('is-active');
      });
      toggleEl.classList.add('is-active');
      const index = Array.prototype.indexOf.call(
        toggleEl.parentNode.children,
        toggleEl
      );
      const contents = tabsEl.querySelectorAll('.tabs__content');
      contents.forEach((content) => {
        content.classList.remove('is-active');
      });
      contents[index].classList.add('is-active');
    });
  });



// get the iframe element


