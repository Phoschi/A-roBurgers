document.addEventListener('DOMContentLoaded', function() {
    // Initialize SimpleLightbox
    var lightbox = new SimpleLightbox('.lightbox', {
        captionsData: 'data-caption',
        captionDelay: 250,
        captionPosition: 'bottom'
    });

    // Initialize Filterizr
    $('.filter-container').filterizr({
        animationDuration: 0.5,
        filter: 'all',
        delayMode: 'progressive',
        easing: 'ease-out',
        filterOutCss: {
            opacity: 0,
            transform: 'scale(0.5)'
        },
        filterInCss: {
            opacity: 1,
            transform: 'scale(1)'
        },
        layout: 'sameSize'
    });

    // Debugging: Check if all lightbox elements are recognized
    lightbox.on('show.simplelightbox', function() {
        console.log('Image shown in lightbox');
    });

    document.getElementById('burger-menu').addEventListener('click', function() {
        var menu = document.getElementById('dropdown-menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; 
    });
});
