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
