const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 4000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
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


const searchContainer = document.querySelector('.search-container');
const clearBtn = document.querySelector('.clear-btn');
const input = document.querySelector('input');

searchContainer.addEventListener('click', function() {
  searchContainer.classList.toggle('activesearch');
  input.value = "";
});

input.addEventListener('click', function(e) {
  e.stopPropagation();
});



// Check for existing events in local storage
const addEventButton = document.getElementById('add-event-button');
const eventForm = document.getElementById('event-form');
const eventFormContainer = document.getElementById('event-form-container');
const announcementContainer = document.getElementById('announcement-container');

// Retrieve events from local storage on page load
window.addEventListener('load', () => {
  const events = JSON.parse(localStorage.getItem('events')) || [];
  events.forEach(event => {
    const card = createEventCard(event.title, event.description, event.location, event.date);
    announcementContainer.appendChild(card);
  });
});


addEventButton.addEventListener('click', (e) => {
  const password = prompt('Please enter password:');
  const confirmPassword = config.passcode
  if (password !== confirmPassword) {
    return;
  }
  eventFormContainer.classList.remove('hidden');
  addEventButton.classList.add('hidden');
});


eventForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const location = document.getElementById('location').value;
  const date = document.getElementById('date').value;
  const card = createEventCard(title, description, location, date);
  announcementContainer.appendChild(card);
  eventForm.reset();
  eventFormContainer.classList.add('hidden');
  addEventButton.classList.remove('hidden');
  // Save events to local storage
  const events = JSON.parse(localStorage.getItem('events')) || [];
  events.push({ title, description, location, date });
  localStorage.setItem('events', JSON.stringify(events));
});

announcementContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-button')) {
    const password = prompt('Please enter password:');
    const confirmPassword = config.passcode
    if (password !== confirmPassword) {
      return;
    }
    const card = e.target.parentNode;
    announcementContainer.removeChild(card);
    // Remove event from local storage
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const title = card.querySelector('h1').textContent;
    const filteredEvents = events.filter(event => event.title !== title);
    localStorage.removeItem('events', JSON.stringify(filteredEvents));
  }
});


function createEventCard(title, description, location, date) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h1>${title}</h1>
    <h2>${description}</h2>
    <p>${location}</p>
    <p>${date}</p>
    <button class="delete-button">Delete Event</button>
  `;
  return card;
}

const accordionTitle = document.querySelector('.accordion-title');
const arrow = document.querySelector('.arrow');
const accordionContent = document.querySelector('.accordion-content');

accordionTitle.addEventListener('click', () => {
  arrow.classList.toggle('down');
  accordionContent.classList.toggle('show-lol');
});

