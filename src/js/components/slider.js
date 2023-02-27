$(document).ready(function () {
    // Références aux éléments HTML
    const prevButton = $('.arrow.prev');
    const nextButton = $('.arrow.next');
    const slider = $('.slider');
    const slides = $('.slide');

    /**
     * Au chargement de la page, on utilise la classe d-none car avec hide(), on voit les différentes div pendant une demi-seconde.
     * Une fois la page chargée et qu'on arrive au fichier slider.js, on peux enlever d-none partout et maintenant jouer avec hide() et show().
     */
    slides.removeClass('d-none');

    // Variables pour suivre la position actuelle du slider
    let currentSlide = 0;

    // Affiche le slide actuel
    const showCurrentSlide = function () {
        $(slides[currentSlide]).show();
        $(slides.not(slides[currentSlide])).hide();
    };

    // Affiche le prochain slide
    const showNextSlide = function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showCurrentSlide();
    };

    // Affiche le slide précédent
    const showPrevSlide = function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showCurrentSlide();
    };

    // Événements de clic sur les boutons de navigation
    prevButton.click(function () {
        clearInterval(interval);
        showPrevSlide();
        interval = setInterval(showNextSlide, 3000);
    });
    nextButton.click(function () {
        clearInterval(interval);
        showNextSlide();
        interval = setInterval(showNextSlide, 3000);
    });

    // Affiche le slide initial
    showCurrentSlide();

    // Démarre la rotation automatique des slides
    interval = setInterval(showNextSlide, 3000);
});