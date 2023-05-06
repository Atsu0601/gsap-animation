var slide = document.getElementById("slide");
var t = TweenLite.to(slide, 0.5, {top:0, paused:true, reversed:true});

function animateSlide() {
  if (t.reversed()) {
    t.play();
  } else {
    t.reverse();
  }
}