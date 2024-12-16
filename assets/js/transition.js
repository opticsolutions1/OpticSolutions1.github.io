window.addEventListener('scroll', function () {
  const imageContainers = document.querySelectorAll('.image-container');

  imageContainers.forEach(container => {
    const rect = container.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      container.classList.add('visible'); // Add 'visible' class to trigger the transition
    }
  });
});

// Add 'scrolled' class on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Select the text element
const fadeText = document.querySelector('.fade-out-text');

// Add scroll event listener
window.addEventListener('scroll', () => {
  const fadePoint = window.innerHeight / 2; // Set fade point to mid-screen
  const textTop = fadeText.getBoundingClientRect().top;

  if (textTop < fadePoint) {
    fadeText.classList.add('hidden'); // Fade out
  } else {
    fadeText.classList.remove('hidden'); // Fade in
  }
});

window.addEventListener("load", () => {
  document.querySelector(".header .overlay").classList.add("show");
});

