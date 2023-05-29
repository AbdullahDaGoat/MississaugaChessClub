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