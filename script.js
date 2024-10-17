let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    document.querySelector('.slides').style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

// Auto slide (optional)
setInterval(() => changeSlide(1), 3000);
