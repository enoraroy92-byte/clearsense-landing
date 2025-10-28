// ========== 1. MENU BURGER (mobile) ==========
const burger = document.querySelector('.menu-burger');
const headerMobile = document.querySelector('.header-mobile');

if (burger) {
  burger.addEventListener('click', () => {
    headerMobile.classList.toggle('open');
    burger.classList.toggle('active');
  });
}

// ========== 2. ANIMATION AU SCROLL (features) ==========
const features = document.querySelectorAll('.feature');

function revealOnScroll() {
  features.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); 

// ========== 3. CARROUSEL DES AVIS CLIENTS ==========
const avisList = [
  { texte: "« Les cours proposés sont incroyables ! »", auteur: "Amélie M." },
  { texte: "« Une équipe au top et des cours variés 👌 »", auteur: "Lucas B." },
  { texte: "« Je recommande ClearSense à 100% ! »", auteur: "Sophie L." }
];

let index = 0;
const avisContainer = document.querySelector('.avis blockquote p');
const auteurContainer = document.querySelector('.avis .auteur');

function showAvis(i) {
  if (avisContainer && auteurContainer) {
    avisContainer.textContent = avisList[i].texte;
    auteurContainer.textContent = "— " + avisList[i].auteur;
  }
}


setInterval(() => {
  index = (index + 1) % avisList.length;
  showAvis(index);
}, 6000);

showAvis(index);

// ========== 4. PRELOADER ==========
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if(preloader){
    preloader.classList.add('show');

    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.transition = 'opacity 0.8s ease';
    }, 1500);

    setTimeout(() => {
      preloader.style.display = 'none';
    }, 2300);
  }
});

// ========== 5. APPARITION AU SCROLL (sections) ==========
const sections = document.querySelectorAll('.scroll-anim:not(.footer)');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => observer.observe(section));

// ========== 6. BACK TO TOP ==========
const backToTop = document.getElementById('back-to-top');

if(backToTop){
  window.addEventListener('scroll', () => {
    if(window.scrollY > 400){ 
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ========== 7. FAQ ACCORDÉON ==========
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    faqItems.forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});

// ========== 8. NEWSLETTER SUCCESS MESSAGE ==========
const newsletterForm = document.querySelector('.newsletter-form');
const newsletterMessage = document.querySelector('.newsletter-message');

if(newsletterForm && newsletterMessage){
  newsletterForm.addEventListener('submit', function(e){
    e.preventDefault();

    newsletterMessage.textContent = "Merci pour votre inscription ! :)";
    newsletterMessage.classList.add('show');

  
    newsletterForm.reset();

   
    setTimeout(() => {
      newsletterMessage.classList.remove('show');
    }, 4000);
  });
}


// ========== ANIMATION DU BOUTON "Je réserve ma séance offerte" ==========
const ctaBtn = document.querySelector('.cta');

if (ctaBtn) {
  ctaBtn.addEventListener('click', (e) => {
    e.preventDefault(); 

    ctaBtn.classList.add('loading');
    ctaBtn.innerHTML = '<div class="spinner"></div>';


    setTimeout(() => {
      ctaBtn.classList.remove('loading');
      ctaBtn.classList.add('success');
      ctaBtn.innerHTML = 'Séance réservée !';
    }, 1500);
  });
}
