// ==========================================
// 1. ALL DOM SELECTORS AT THE TOP
// ==========================================
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const navLinks = document.querySelectorAll(".navbar-menu li a");


// ==========================================
// 3. COMPONENT EVENT LISTENERS (Navbar & Forms)
// ==========================================

const copyrightYear = document.getElementById('copyrightYear').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('copyrightYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Mobile Navbar Toggle
if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  });
}

// Close mobile navbar menu when links are clicked
if (navLinks.length > 0) {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarToggle) navbarToggle.classList.remove("active");
      if (navbarMenu) navbarMenu.classList.remove("active");
    });
  });
}

// Remove sticky mobile focus background from links/buttons
document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("touchend", () => {
    element.blur();
  });
});


// ==========================================
// 4. GLOBAL BROWSER WINDOW CONTROLS (Scrolls / History)
// ==========================================
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.onload = () => {
  window.scrollTo(0, 0);
};

window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
});

window.addEventListener("pageshow", (event) => {
  window.scrollTo(0, 0);
});