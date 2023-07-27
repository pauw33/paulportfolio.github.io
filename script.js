
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () =>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);

});

const logoText = document.getElementById('logo-text');
const text = "PAUL"; // Replace this with your actual logo text
let index = 0;
const typingSpeed = 100; // Adjust the typing speed (milliseconds) here
const pauseBeforeRestart = 3000; // Add a delay (in milliseconds) before the animation restarts

function typeLogoText() {
  if (index <= text.length) {
    logoText.textContent = text.slice(0, index);
    index++;
    setTimeout(typeLogoText, typingSpeed);
  } else {
    index = 0; // Reset index to 0 after the animation completes
    setTimeout(typeLogoText, pauseBeforeRestart);
  }
}

typeLogoText();
