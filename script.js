/* --- CONFIGURAÇÃO DO SITE ROMÂNTICO --- */

// 1. DATA DE INÍCIO DO NAMORO (08 de Fevereiro de 2025)
const startDate = new Date('2025-02-08T00:00:00');

function updateCounter() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCounter, 1000);
updateCounter(); // Executa uma vez imediatamente


// 2. GERADOR DE FOTOS VOADORAS EM FORMATO DE CORAÇÃO

/* ============================================================
   ⚠️ ATENÇÃO, FELLYPE! ⚠️
   Edite a lista abaixo com os nomes EXATOS das fotos 
   que você subiu no GitHub (incluindo .jpg ou .png).
   ============================================================ */
const listaDeFotosVoadoras = [
    'foto-principal.jpeg', // Exemplo 1
    'galeria1.png',       // Exemplo 2
    'galeria2.jpeg',       // Exemplo 3
    'galeria3.jpeg',       // Adicione quantas quiser, separadas por vírgula e entre aspas
    'galeria4.jpeg'
];


function createPhotoHeart() {
    // Se a lista estiver vazia, não faz nada
    if (listaDeFotosVoadoras.length === 0) return;

    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Escolhe uma foto aleatória da lista
    const fotoAleatoria = listaDeFotosVoadoras[Math.floor(Math.random() * listaDeFotosVoadoras.length)];
    
    // Define a foto como fundo do coração
    heart.style.backgroundImage = `url('${fotoAleatoria}')`;
    
    // Posição horizontal aleatória (vw = width da tela)
    heart.style.left = (Math.random() * 90 + 5) + 'vw'; // Mantém longe das bordas
    
    // Tamanhos aleatórios (fotos maiores que os antigos corações)
    // Entre 60px e 100px
    const size = Math.random() * 40 + 60;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    
    // Tempo de subida aleatório (mais lento para dar elegância)
    // Entre 8s e 15s
    const duration = Math.random() * 7 + 8;
    heart.style.animationDuration = duration + 's';
    
    container.appendChild(heart);
    
    // Remove o elemento após a animação acabar (otimização)
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Cria uma foto-coração a cada 1.5 segundos (menos frequente que antes para não poluir)
setInterval(createPhotoHeart, 1500);

// Cria algumas no início para não começar vazio
for(let i=0; i<3; i++) {
    setTimeout(createPhotoHeart, i * 500);
}


// 3. FUNÇÃO DO BOTÃO SURPRESA
function revealSurprise() {
    const btn = document.getElementById('surprise-btn');
    const message = document.getElementById('surprise-message');
    
    btn.classList.add('hidden');
    message.classList.remove('hidden');
}
