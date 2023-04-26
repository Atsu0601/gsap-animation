$("#boxWrapper").css({visibility:"visible"});

var tl = new TimelineLite(),
    letters = $("#boxWrapper div");
tl.staggerFrom(letters, 0.5, {opacity:0, scale:0, rotation:-180}, 0.3)
  .staggerTo(letters, 0.3, {scale:0.8}, 0.3, 0.7);