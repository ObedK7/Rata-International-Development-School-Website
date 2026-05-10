const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const navLinks = document.querySelectorAll(".navbar-menu li a");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

// CLOSE MENU WHEN A LINK IS CLICKED
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarToggle.classList.remove("active");
    navbarMenu.classList.remove("active");
  });

  window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
      window.scrollTo(0, 0);
    }
  });
});

// Disable browser scroll restoration
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

history.scrollRestoration = "manual";

window.onload = () => {
  window.scrollTo(0, 0);
};

// Force page to top on load
window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
});

// Extra fix for mobile browsers using cache
window.addEventListener("pageshow", () => {
  window.scrollTo(0, 0);
});
