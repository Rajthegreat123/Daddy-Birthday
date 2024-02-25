const card = document.getElementById('flip-card');
const body = document.body;

// Initialize particles.js for confetti effect
particlesJS('confetti-container', {
    particles: {
        number: {
            value: 100,
        },
        color: {
            "value": "random", // Adjust the confetti color
        },
        shape: {
            type: 'circle', // Use circles
        },
        opacity: {
            value: 0.5,
            random: true,
        },
        size: {
            value: 10,
            random: true,
        },
        move: {
            enable: true,
            direction: 'bottom', // Move particles from bottom to top
            speed: 5,
            random: true,
        },
    },
});

card.addEventListener('click', () => {
    card.classList.toggle('flipped'); // toggle 'flipped' class on click

    // Trigger confetti animation
    confettiAnimation();
});

// Function to start the confetti animation
function confettiAnimation() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.style.display = 'block';
}
