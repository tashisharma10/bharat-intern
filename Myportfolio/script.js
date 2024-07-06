// script.js
// Add event listener to the navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  
  // Add event listener to the hero section button
  document.addEventListener("DOMContentLoaded", function() {
    const heroButton = document.querySelector("#home button");
    heroButton.addEventListener("click", () => {
      const aboutSection = document.querySelector("#about");
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Example: Add your profile picture dynamically
    const profilePicDiv = document.querySelector('.profile-pic');
    profilePicDiv.style.backgroundImage = "url('your-image.jpg')"; // Replace with your profile picture
});
  
  // Add event listener to the project cards
  document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll("#projects li");
    projectCards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        card.classList.add("hover");
      });
      card.addEventListener("mouseout", () => {
        card.classList.remove("hover");
      });
    });
  });