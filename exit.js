let clickCount = 0;
const button = document.getElementById('saida');
const popup = document.getElementById('popup');
const erro = document.getElementById('erro');
const caixaPreta = document.getElementById('caixa-preta');

button.addEventListener('click', () => {
    clickCount++;
    if (clickCount <= 2) {
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

document.getElementById('sim').addEventListener('click', function(voltar) {
    caixaPreta.textContent = '-.-. .- .. -..- .- / .--. .-. . - .-';
    voltar.preventDefault();
    window.location.href = 'index.html';
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
