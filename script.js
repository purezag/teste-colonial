
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






const images = document.querySelectorAll('.photos img', '.photos-store img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-btn');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');

  let currentIndex = 0;

  
  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('show');
      currentIndex = index;
    });
  });

  
  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('show');
  });

 function changeImage(index) {
  lightboxImg.style.opacity = 0;

  setTimeout(() => {
    lightboxImg.src = images[index].src; 
    lightboxImg.onload = () => {
      lightboxImg.style.opacity = 1; 
    };
  }, 300); 
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


 const sections = document.querySelectorAll(['.about', '.container', '.contacts']);

window.addEventListener("scroll", () => {
  for (let el of sections) {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 300) {
      el.classList.add("active");
    }
  }
});


  const siteSections = ['hero', 'about', 'container', 'contacts', 'head'].map(id => document.getElementById(id));

  const allStores = ['store', 'store-2', 'store-3'].map(id => document.getElementById(id));

 
  function fadeOutSections(sections) {
    sections.forEach(section => {
      section.classList.remove('visible');
      section.classList.add('hidden');
      setTimeout(() => {
        section.style.display = 'none';
      }, 500);
    });
  }

  function fadeInSection(section) {
    section.style.display = 'block';
    setTimeout(() => {
      section.classList.remove('hidden');
      section.classList.add('visible');
    }, 10);
  }

  
  function openStore(storeId) {
    const store = document.getElementById(storeId);
    fadeOutSections(siteSections);
    fadeInSection(store);
    window.scrollTo(0, 0);
  }

  
  function closeAllStores() {
    allStores.forEach(store => {
      store.classList.remove('visible');
      store.classList.add('hidden');
      setTimeout(() => {
        store.style.display = 'none';
      }, 500);
    });

    siteSections.forEach(section => {
      section.style.display = 'block';
      setTimeout(() => {
        section.classList.remove('hidden');
        section.classList.add('visible');
      }, 10);
    });

    document.getElementById('container').scrollIntoView({ behavior: 'smooth' });
  }

  
  document.getElementById('contact-seller').addEventListener('click', () => openStore('store'));
  document.getElementById('contact-seller-2').addEventListener('click', () => openStore('store-2'));
  document.getElementById('contact-seller-3').addEventListener('click', () => openStore('store-3'));

 
  document.querySelectorAll('.go-back').forEach(button => {
    button.addEventListener('click', closeAllStores);
  });

