document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menu-toggle");
  const navbar = document.querySelector("nav ul");
  const navLinks = navbar.querySelectorAll("li a");
if(window.innerWidth<767){
  navbar.style.display = "none";

  menuToggle.addEventListener("click", () => {
      if (navbar.style.display === "none" || navbar.style.display === "") {
          navbar.style.display = "block";
      } else {
          navbar.style.display = "none"; 
      }
  });
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.style.display = "none";
        });
    });
  }
});

window.onscroll = function() {
  let scrollBtn = document.getElementById("scrollUpBtn");
  if (document.documentElement.scrollTop > 200) {
      scrollBtn.classList.add("show");
  } else {
      scrollBtn.classList.remove("show");
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener('DOMContentLoaded', function() {
  // First, handle the view-based animation for text
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the in-view class to make the text visible
        entry.target.classList.add('in-view');
        
        // For overall item animation in browsers without animation-timeline support
        if (!CSS.supports('animation-timeline: scroll()')) {
          entry.target.style.animationPlayState = 'running';
        }
      }
    });
  }, {
    threshold: 0.25 // When 25% of the item is visible
  });
  
  // Observe all grid items
  document.querySelectorAll('.grid-item').forEach(item => {
    observer.observe(item);
    
    // Only set this if the browser doesn't support animation-timeline
    if (!CSS.supports('animation-timeline: scroll()')) {
      item.style.animationPlayState = 'paused';
    }
  });
});

