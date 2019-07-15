var slides = document.querySelectorAll('.carousel-wrapper .carousel-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide() {
    slides[currentSlide].className = 'carousel-item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'carousel-item showing';
}