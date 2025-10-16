// Typing Effect
const typingElement = document.querySelector(".typing");
const roles = ["Web Developer", "Frontend Designer", "Creative Coder","Backend Developer"];
let roleIndex = 0;
let charIndex = 0;
function typeEffect() {
  if(charIndex < roles[roleIndex].length){
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  }else{setTimeout(eraseEffect,1500);}
}
function eraseEffect(){
  if(charIndex > 0){
    typingElement.textContent = roles[roleIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(eraseEffect,60);
  }else{
    roleIndex = (roleIndex+1)%roles.length;
    setTimeout(typeEffect,500);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Active Navbar
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll",()=>{
  let current="";
  document.querySelectorAll("section").forEach(section=>{
    const sectionTop = section.offsetTop-60;
    if(pageYOffset>=sectionTop) current=section.getAttribute("id");
  });
  navLinks.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href").includes(current)) link.classList.add("active");
  });
});

// Scroll Animation
// Scroll Animation (works every time)
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");       // animate in
    } else {
      entry.target.classList.remove("show");    // animate out
    }
  });
}, { threshold: 0.2 });

hiddenElements.forEach((el) => observer.observe(el));


// Scroll To Top
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function(){
  scrollBtn.style.display = document.body.scrollTop>200 || document.documentElement.scrollTop>200 ? "block" : "none";
};
scrollBtn.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"});});

// Contact Form
document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const message=document.getElementById("message").value.trim();
  if(!name||!email||!message){alert("Please fill all fields!");}
  else{alert("Thank you for contacting me, "+name+"!");this.reset();}
});
