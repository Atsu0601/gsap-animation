let tl = gsap.timeline({
    repeat: -1,
});

tl.to('.circle-link-1', {
  background: 'black',
  duration: 2,
  // yoyo: true,
  // repeat: -1,
  // stagger: 1,
  ease: 'power1.inOut',
}).to('.circle-link-2', {
  background: 'white',
  duration: 2,
  // yoyo: true,
  // repeat: -1,
  // stagger: 1,
  ease: 'power1.inOut',
});