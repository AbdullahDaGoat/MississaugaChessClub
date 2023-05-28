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
});

var li_items = document.querySelectorAll(".accordion_wrap ul li");
var ul = document.querySelector(".accordion_wrap ul");

li_items.forEach(function(item){
	item.addEventListener("click", function(){
		li_items.forEach(function(item){
			item.classList.remove("active");
		})
		item.classList.add("active");
	});
});

ul.addEventListener("mouseleave", function(){
	li_items.forEach(function(item){
		item.classList.remove("active");
	})
});