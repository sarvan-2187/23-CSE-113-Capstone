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

// Responsive Typewriter effect for hero section
document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector(".hero h1");
  let text = "Master AI Skills, Build a Smarter Future. ";
  
  // Adjust text for smaller screens if needed
  function updateTextForScreenSize() {
      if (window.innerWidth <= 480) {
          // Optional: use shorter text for very small screens
          text = "Unlock AI. Unlock Potential.";
      } else {
          text = "Master AI Skills, Build a Smarter Future. ";
      }
      
      // Reset the element when screen size changes
      heroTitle.textContent = "";
      startTypewriterEffect();
  }
  
  // Initial setup
  updateTextForScreenSize();
  
  // Re-run if window is resized
  window.addEventListener('resize', function() {
      // Only reset the animation if the screen size category changes
      const wasSmall = text === "Unlock AI. Unlock Potential.";
      const isNowSmall = window.innerWidth <= 480;
      
      if (wasSmall !== isNowSmall) {
          updateTextForScreenSize();
      }
  });
  
  function startTypewriterEffect() {
      let index = 0;
      
      function typeEffect() {
          if (index < text.length) {
              heroTitle.textContent += text.charAt(index);
              index++;
              setTimeout(typeEffect, 100); // Typing speed
          } else {
              // Add class for blinking cursor
              heroTitle.classList.add("typing-complete");
          }
      }
      
      // Start typing
      typeEffect();
  }
});
