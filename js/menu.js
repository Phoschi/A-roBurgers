document.addEventListener('DOMContentLoaded', function() {
    // Initialize SimpleLightbox for image gallery
    var lightbox = new SimpleLightbox('.lightbox', {
        captionsData: 'data-caption', // Use data-caption attribute for captions
        captionDelay: 250, // Delay before showing the caption
        captionPosition: 'bottom' // Position the caption at the bottom
    });

    // Initialize Filterizr for filtering menu items
    $('.filter-container').filterizr({
        animationDuration: 0.5, // Duration of the animation
        filter: 'all', // Default filter
        delayMode: 'progressive', // Progressive delay mode
        easing: 'ease-out', // Easing function
        filterOutCss: {
            opacity: 0, // CSS for filtered out items
            transform: 'scale(0.5)' // Scale down filtered out items
        },
        filterInCss: {
            opacity: 1, // CSS for filtered in items
            transform: 'scale(1)' // Scale up filtered in items
        },
        layout: 'sameSize' // Keep items the same size
    });

    // Debugging: Log when an image is shown in the lightbox
    lightbox.on('show.simplelightbox', function() {
        console.log('Image shown in lightbox');
    });

    // Toggle the display of the burger menu on MOBILE view
    document.getElementById('burger-menu').addEventListener('click', function() {
        var menu = document.getElementById('dropdown-menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; 
    });
});
