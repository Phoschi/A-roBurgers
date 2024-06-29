// Initialisation du carrousel d'images avec Swiper
const imageSwiper = new Swiper('.image-carousel', {
    effect: 'coverflow', // Effet de transition 'coverflow'
    centeredSlides: true, // Les diapositives sont centrées
    loop: true, // Boucle infinie
    navigation: {
        nextEl: '.swiper-button-next', // Bouton de navigation suivant
        prevEl: '.swiper-button-prev', // Bouton de navigation précédent
    },
    autoplay: {
        delay: 3000, // Délai entre les transitions automatiques (en millisecondes)
    },
    breakpoints: {
        600: {
            slidesPerView: 1, // Nombre de diapositives visibles pour les écrans de 600px et plus
        },
    },
});

// Initialisation du carrousel des avis avec Swiper
const reviewSwiper = new Swiper('.review-carousel', {
    direction: 'horizontal', // Direction de défilement horizontale
    slidesPerView: 2, // Nombre de diapositives visibles
    loop: true, // Boucle infinie
    autoplay: {
        delay: 700, // Délai entre les transitions automatiques (en millisecondes)
        disableOnInteraction: false, // Ne pas désactiver l'autoplay lors des interactions de l'utilisateur
    },
    speed: 3000, // Vitesse de transition (en millisecondes)
});

// Gestion de l'affichage du menu burger
document.getElementById('burger-menu').addEventListener('click', function() {
    var menu = document.getElementById('dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; // Affiche ou cache le menu déroulant
});
