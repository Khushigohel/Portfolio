// Typing Effect
const typingElement = document.querySelector(".typing");
const roles = ["Web Developer", "Frontend Designer", "Creative Coder","Backend Developer"];
let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(eraseEffect, 60);
  } else {
    roleIndex = (roleIndex+1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Navbar active link
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) link.classList.add("active");
  });
});

// Scroll Animation
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
});
hiddenElements.forEach(el => observer.observe(el));

// Scroll To Top
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? "block" : "none";
};
scrollBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

// Contact Form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message Sent!");
});

// Hamburger Menu Toggle for Mobile
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

// Close menu on link click (optional)
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if(navMenu.classList.contains("active")){
      navMenu.classList.remove("active");
      hamburger.classList.remove("toggle");
    }
  });
});
// Skill Tabs Switch
const tabs = document.querySelectorAll(".tab");
const categories = document.querySelectorAll(".skill-category");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    categories.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    const target = document.getElementById(tab.dataset.category);
    target.classList.add("active");
  });
});
