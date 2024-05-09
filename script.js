document.getElementById('noButton').addEventListener('click', () => {
    const noButton = document.getElementById('noButton');
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});


document.getElementById('yesButton').addEventListener('click', () => {
    // Confetti effect (simple version)
    // You can add a more sophisticated confetti effect using a library like canvas-confetti
    const maxConfettiCount = 100;
    const confetti = [];
    for (let i = 0; i < maxConfettiCount; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.innerText = '🎉';
        confettiPiece.style.position = 'absolute';
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.top = `${Math.random() * 100}%`;
        document.body.appendChild(confettiPiece);
        confetti.push(confettiPiece);
    }
    alert('Gun ve saat yaz instadan :)');
    confetti.forEach(piece => document.body.removeChild(piece));
});
