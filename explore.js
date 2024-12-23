// Seleciona as imagens e o modal
const images = document.querySelectorAll('.image img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

// Mostra o modal com a imagem clicada
images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

// Fecha o modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target !== modalImg) {
        modal.style.display = 'none';
    }
});
