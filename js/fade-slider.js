(() => {

  const slides = document.querySelectorAll('.fade-slider__item');
  const activeClass = 'fade-slider__item--visible';
  let i = 0;

  setInterval(() => {
    slides[i].classList.remove(activeClass);
    i++;

    if(i + 1 > slides.length) {
      i = 0;
    }

    slides[i].classList.add(activeClass);
  }, 5000);
})();