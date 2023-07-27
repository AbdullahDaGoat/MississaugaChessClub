const modal = document.getElementById('modal');
const closeButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');
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
    console.log(banner.classList.remove("hidden"))
  }

  // Update the previous scroll position
  prevScrollPos = currentScrollPos;
});

const cta1 = document.getElementById("cta-1");
const cta2 = document.getElementById("cta-2")
const cta3 = document.getElementById("cta-3")
const cta4 = document.getElementById("cta-4")

cta1.addEventListener("click", () =>{ 
  window.location.href = "schedule.html"
});

cta2.addEventListener("click", () =>{ 
  window.location.href = "contact.html"
});

cta3.addEventListener("click", () =>{ 
  window.location.href = "index.html"
});

cta4.addEventListener("click", () => { 
  window.location.href = "pricing.html"
});


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: -20,
    depth: 120,
    modifier: 3,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const steps = document.querySelectorAll("#submit-to-google-sheet > div");
const nextButtons = document.querySelectorAll(".next-button");
let currentStep = 0;

nextButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    // Hide the current step
    steps[currentStep].style.display = "none";

    // Show the next step
    currentStep++;
    steps[currentStep].style.display = "block";

    // Clear the input of the previous step
    // const inputs = steps[currentStep - 1].querySelectorAll("input, textarea");
    // inputs.forEach((input) => {
    //   input.value = "";
    // });
  });
});