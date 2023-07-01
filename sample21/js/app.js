gsap.set('box', {
  x: 50,
  y: 50,
  scale: 0.3,
  opacity: 0.1
});

const boxes = document.querySelectorAll('box');

let options = {
threshold: [0]
};

var myObserver = new IntersectionObserver(entries => {
entries.forEach(entry => {    
if (entry.isIntersecting) {
gsap.to(entry.target, {
  duration: 11,
  x: 0,
  y: 0,
  scale: 1,
  opacity: 1
});
} else {

 return;
}    
})
}, options);

boxes.forEach(box => {    
myObserver.observe(box);
});
