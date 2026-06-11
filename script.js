// DATA DE INÍCIO DO NAMORO (08 de Fevereiro de 2025)
const startDate = new Date('2025-02-08T00:00:00');

function updateCounter() {
    const now = new Date();
    const difference = now - startDate;

    // Cálculos matemáticos para converter milissegundos em dias, horas, minutos e segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Inserindo os valores no HTML de forma dinâmica
    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}

// Atualiza o contador a cada 1 segundo
setInterval(updateCounter, 1000);

// GERADOR DE CORAÇÕES FLUTUANTES
function createHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Posição horizontal aleatória
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Tamanhos aleatórios para dar profundidade
    const size = Math.random() * 15 + 10;
    heart.style.fontSize = size + 'px';
    
    // Tempo de subida aleatório
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + 's';
    
    container.appendChild(heart);
    
    // Remove o coração após a animação acabar para não travar o celular
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Cria um coração a cada 300 milissegundos
setInterval(createHeart, 300);

// FUNÇÃO DO BOTÃO SURPRESA
function revealSurprise() {
    const btn = document.getElementById('surprise-btn');
    const message = document.getElementById('surprise-message');
    
    btn.classList.add('hidden');
    message.classList.remove('hidden');
}
