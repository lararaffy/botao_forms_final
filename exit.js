let clickCount = 0;
const button = document.getElementById('saida');
const popup = document.getElementById('popup');
const erro = document.getElementById('erro');
const caixaPreta = document.getElementById('caixa-preta');

button.addEventListener('click', () => {
    clickCount++;
    if (clickCount <= 21) {
        moveButton();
    } else {
        showPopup();
    }
});

function moveButton() {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function showPopup() {
    button.style.display = 'none';
    popup.style.display = 'block';
}

document.getElementById('sim').addEventListener('click', () => {
    popup.style.display = 'none';
    erro.style.display = 'block';
    caixaPreta.textContent = '-.-. .- .. -..- .- / .--. .-. . - .-';
    setTimeout(() => {
        erro.style.display = 'none';
    }, 3000);
});

document.getElementById('nao').addEventListener('click', () => {
    popup.style.display = 'none';
    button.style.display = 'block';
    clickCount = 0;
    moveButton();
});

document.addEventListener('DOMContentLoaded', () => {
    const backgroundAudio = document.getElementById('background-audio');
    backgroundAudio.play();
});