/* Variables */

const hamburger = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

/* Opening menu and changing icons on button click */

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("close");
  mobileMenu.classList.toggle("open");
  body.classList.toggle("fixed");
});
