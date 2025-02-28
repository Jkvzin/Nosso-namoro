const imagens = document.querySelectorAll('.fotinhas img');
const modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);

let imagemAtual = 0;

function abrirModal(index) {
    imagemAtual = index;
    modal.innerHTML = `
        <span class="fechar" onclick="fecharModal()">&times;</span>
        <img src="${imagens[index].src}" class="imagem-modal">
        <button class="anterior" onclick="trocarImagem(-1)">&#10094;</button>
        <button class="proxima" onclick="trocarImagem(1)">&#10095;</button>
    `;
    modal.style.display = 'flex';
}

function fecharModal() {
    modal.style.display = 'none';
}

function trocarImagem(direcao) {
    imagemAtual += direcao;
    if (imagemAtual >= imagens.length) imagemAtual = 0;
    if (imagemAtual < 0) imagemAtual = imagens.length - 1;
    modal.querySelector('.imagem-modal').src = imagens[imagemAtual].src;
}

imagens.forEach((img, index) => {
    img.addEventListener('click', () => abrirModal(index));
});

const estilo = document.createElement('style');
estilo.innerHTML = ` /* Estilo inline que você tinha */ `;
document.head.appendChild(estilo);