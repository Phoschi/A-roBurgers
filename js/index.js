const imageSwiper = new Swiper('.image-carousel', {
    effect: 'coverflow', 
    centeredSlides: true, 
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    },
    autoplay: {
        delay: 3000, 
    },
    breakpoints: {
        600: {
            slidesPerView: 1,
        },
    },
});

// Initializing the review carousel with Swiper
const reviewSwiper = new Swiper('.review-carousel', {
    direction: 'horizontal', 
    slidesPerView: 2, 
    loop: true, 
    autoplay: {
        delay: 700, 
        disableOnInteraction: false, // Don't disable autoplay on user interaction
    },
    speed: 3000, 
});

// Handling the display of the menu for MOBILE VERSION
document.getElementById('burger-menu').addEventListener('click', function() {
    var menu = document.getElementById('dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; 
});
