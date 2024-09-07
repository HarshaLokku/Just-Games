const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

const simonModal = document.getElementById('simonModal');
const whackModal = document.getElementById('whackModal');
const snakeModal = document.getElementById('snakeModal');
const carModal = document.getElementById('carModal');
const simonRulesBtn = document.querySelector('.instructions.simon');
const whackRulesBtn = document.querySelector('.instructions.whack');
const snakeRulesBtn = document.querySelector('.instructions.snake');
const carRulesBtn = document.querySelector('.instructions.car');
const closeBtns = document.querySelectorAll('.close-btn');

function showModal(modal) {
    modal.style.display = 'flex';
}

function closeModal(modal) {
    modal.style.display = 'none';
}

simonRulesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showModal(simonModal);
});

whackRulesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showModal(whackModal);
});

snakeRulesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showModal(snakeModal);
});

carRulesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showModal(carModal);
});

closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        closeModal(btn.parentElement.parentElement);
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
});

