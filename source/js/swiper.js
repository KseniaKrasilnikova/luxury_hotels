var swiper = new Swiper('.swiper-container', {
    speed: 400,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true
});
