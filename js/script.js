// script.js
let currentIndex = 0;

const cards = document.querySelectorAll('.exp-card');
const totalCards = cards.length;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * 500; // Adjust based on card width
    cards.forEach(card => {
        card.style.transform = `translateX(${offset}px)`;
    });
}
