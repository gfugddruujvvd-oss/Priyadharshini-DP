// Typing Animation
const text = ["Frontend Developer", "Web Designer", "Tech Enthusiast"];
let index = 0, charIndex = 0;
const typingEl = document.getElementById("typing");

function typeEffect() {
  if (charIndex < text[index].length) {
    typingEl.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingEl.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 500);
  }
}
typeEffect();

// Scroll to Top
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 300 ? "block" : "none";
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Dark Mode Styles
const style = document.createElement("style");
style.innerHTML = `
  body.dark {
    background: linear-gradient(120deg, #141e30, #243b55);
    color: #eee;
  }
  body.dark .glass {
    background: rgba(255,255,255,0.05);
  }
`;
document.head.appendChild(style);