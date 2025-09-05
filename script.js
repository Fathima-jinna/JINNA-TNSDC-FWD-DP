// Show welcome message when page loads
window.addEventListener("load", function () {
  alert("Welcome to my Student Portfolio!");
});

// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Simple contact button alert
const contactSection = document.querySelector("#contact");
if (contactSection) {
  const btn = document.createElement("button");
  btn.textContent = "Contact Me";
  btn.style.marginTop = "10px";
  btn.style.padding = "8px 15px";
  btn.style.background = "#4CAF50";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";

  btn.addEventListener("click", function () {
    alert("Thanks for contacting me! 📩");
  });

  contactSection.appendChild(btn);
}