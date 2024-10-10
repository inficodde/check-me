document.addEventListener("DOMContentLoaded", function () {
  const confettiContainer = document.querySelector(".confetti-container");

  // Function to create confetti
  function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Set random positions for confetti
    const randomLeft = Math.random() * 100; // Random left position
    const randomSize = Math.random() * 5 + 5; // Random size between 5px and 10px
    confetti.style.left = `${randomLeft}vw`;
    confetti.style.width = `${randomSize}px`;
    confetti.style.height = `${randomSize}px`;

    // Set random animation duration and delay for variety
    const randomDuration = Math.random() * 3 + 2; // Duration between 2 and 5 seconds
    confetti.style.animationDuration = `${randomDuration}s`;

    confettiContainer.appendChild(confetti);

    // Remove confetti after animation to prevent memory leaks
    setTimeout(() => {
      confetti.remove();
    }, randomDuration * 1000);
  }

  // Create multiple confetti pieces
  for (let i = 0; i < 500; i++) {
    createConfetti();
  }

  // Continuously add confetti
  setInterval(() => {
    for (let i = 0; i < 5; i++) {
      createConfetti();
    }
  }, 300);
});