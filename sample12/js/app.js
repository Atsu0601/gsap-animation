var
  slider = document.querySelector('.slider'),
  slides = slider.querySelectorAll('div:not(:first-child)'),
  firstSlide = slider.querySelector('div:first-child');

  tl = new TimelineMax({
    repeat: -1
  })
  .staggerFrom(slides, 2.5, {
    xPercent: -100,
    autoAlpha: 0
  }, 8, 2)
  .fromTo(firstSlide, 2.5, {
    xPercent: -100,
    autoAlpha: 0
  }, {
    xPercent: 0,
    autoAlpha: 1,
    zIndex: 20,
    immediateRender: false
  }, '+=2');
