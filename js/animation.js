// animation.js – initializes and controls animations

document.addEventListener("DOMContentLoaded", () => {
    // Example: Start a loading animation on every page until content is ready
    const spinners = document.querySelectorAll('.loading-spinner');
    spinners.forEach(spinner => {
      // Spinner animation is handled via CSS keyframes
      spinner.style.display = 'block';
    });
  });
  