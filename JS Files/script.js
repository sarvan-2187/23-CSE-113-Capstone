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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        
        if (!CSS.supports('animation-timeline: scroll()')) {
          entry.target.style.animationPlayState = 'running';
        }
      }
    });
  }, {
    threshold: 0.25 
  });
  
  document.querySelectorAll('.grid-item').forEach(item => {
    observer.observe(item);
    
    if (!CSS.supports('animation-timeline: scroll()')) {
      item.style.animationPlayState = 'paused';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector(".hero h1");
  let text = "Master AI Skills, Build a Smarter Future. ";
  
  function updateTextForScreenSize() {
      if (window.innerWidth <= 480) {
          text = "Unlock AI. Unlock Potential.";
      } else {
          text = "Master AI Skills, Build a Smarter Future. ";
      }
      heroTitle.textContent = "";
      startTypewriterEffect();
  }
  
  updateTextForScreenSize();
  
  window.addEventListener('resize', function() {
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
              setTimeout(typeEffect, 100);
          } else {
              heroTitle.classList.add("typing-complete");
          }
      }
      
      typeEffect();
  }
});
