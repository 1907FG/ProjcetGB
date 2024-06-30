function showConfetti() {
    for (let i = 0; i < 100; i++) {
        const confettiElement = document.createElement('div');
        confettiElement.classList.add('confetti');
        confettiElement.style.left = `${Math.random() * 100}vw`;
        confettiElement.style.backgroundColor = getRandomColor();
        document.body.appendChild(confettiElement);

        setTimeout(() => {
            confettiElement.remove();
        }, 3000);
    }
}

function getRandomColor() {
    const colors = ['#ff5e62', '#ff9966', '#ffffff', '#ffcc66', '#66ff66', '#66ccff'];
    return colors[Math.floor(Math.random() * colors.length)];
}
