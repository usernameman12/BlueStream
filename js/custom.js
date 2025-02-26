// custom.js – additional custom JavaScript functionality

document.addEventListener("DOMContentLoaded", () => {
    // Custom behavior: For example, change font size based on settings page input
    const fontSizeInput = document.getElementById("fontSize");
    if (fontSizeInput) {
      fontSizeInput.addEventListener("input", (e) => {
        document.body.style.fontSize = `${e.target.value}px`;
      });
    }
  });
  