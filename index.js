// ==========================================
// 1. ALL DOM SELECTORS AT THE TOP
// ==========================================
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const navLinks = document.querySelectorAll(".navbar-menu li a");

const parentRadios = document.querySelectorAll(".parent-toggle");
const motherData = document.querySelector(".mother-data");
const fatherData = document.querySelector(".father-data");
const guardianData = document.querySelector(".guardian-data");
const bothData = document.querySelector(".both-data");

// ==========================================
// 2. HELPER FUNCTIONS
// ==========================================
function hideAllDataBlocks() {
  // Safe execution checks ensure script doesn't crash on pages without these forms
  if (motherData) motherData.style.display = "none";
  if (fatherData) fatherData.style.display = "none";
  if (guardianData) guardianData.style.display = "none";
  if (bothData) bothData.style.display = "none";
}

// Initial hide call (Safely executed via function layout)
hideAllDataBlocks();

// ==========================================
// 3. COMPONENT EVENT LISTENERS (Navbar & Forms)
// ==========================================

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

// SAFE FORM CONDITIONAL EXECUTION
// This log and loop will ONLY execute if radio buttons are found on the page!
if (parentRadios.length > 0) {
  console.log("Total radio buttons found by JS:", parentRadios.length);

  parentRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      hideAllDataBlocks();

      if (this.id === "check-father" && fatherData) {
        fatherData.style.display = "block";
      } else if (this.id === "check-mother" && motherData) {
        motherData.style.display = "block";
      } else if (this.id === "check-guardian" && guardianData) {
        guardianData.style.display = "block";
      } else if (this.id === "check-both-parents" && bothData) {
        bothData.style.display = "block";
      }
    });
  });
}

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