let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1);
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = active - 1 < firstPosition ? lastPosition : active - 1;
    items[active].classList.add('active'); 

    let dotsOld = indicator.querySelector('ul li.active');
    dotsOld.classList.remove('active');
    dots[active].classList.add('active');
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', -1);
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = active - 1 < firstPosition ? lastPosition : active - 1;
    items[active].classList.add('active'); 

    let dotsOld = indicator.querySelector('ul li.active');
    dotsOld.classList.remove('active');
    dots[active].classList.add('active');
}




const images = document.querySelectorAll('.photos img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-btn');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  let currentIndex = 0;

  // Abrir o lightbox
  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('show');
      currentIndex = index;
    });
  });

  // Fechar o lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('show');
  });

 function changeImage(index) {
  lightboxImg.style.opacity = 0; // Esconde suavemente

  setTimeout(() => {
    lightboxImg.src = images[index].src; // Troca a imagem
    lightboxImg.onload = () => {
      lightboxImg.style.opacity = 1; // Mostra suavemente após carregar
    };
  }, 300); // tempo deve ser um pouco menor que o transition do CSS
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  changeImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  changeImage(currentIndex);
});

  // Fechar ao clicar fora
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('show');
    }
  });