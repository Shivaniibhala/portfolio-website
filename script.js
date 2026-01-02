// ==============================
// Typing Animation (Already Existing)
// ==============================
const typingText = document.querySelector(".typing");
const roles = ["Prospective Software Engineer", "AI Enthusiast", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);


// ==============================
// Scroll Reveal Animations
// ==============================
const revealElements = document.querySelectorAll(
  ".section, .glass, .tilt, .project-card, .cert-card, .skill-bar, .edu-card, .contact-box"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});


// ==============================
// Skill Bar Animation on Scroll
// ==============================
const skillBars = document.querySelectorAll(".bar div");

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute("data-width");
        entry.target.style.width = width + "%";
      }
    });
  },
  { threshold: 0.5 }
);

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});


// ==============================
// Micro Interaction: Button Click Feedback
// ==============================
document.querySelectorAll("a, button").forEach(btn => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.95)";
  });
  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
