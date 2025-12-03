// Typing Roles
const roles = ["Data Analyst", "AI & ML Graduate", "Python Developer"];
let index = 0;
let charIndex = 0;
const typing = document.getElementById("typing");

function typeEffect() {
  if (charIndex < roles[index].length) {
    typing.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typing.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 80);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 300);
  }
}
typeEffect();

// Scroll Animation
const sections = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
sections.forEach(section => observer.observe(section));

// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();
