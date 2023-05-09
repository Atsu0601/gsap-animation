var $box = $("#box");

$box.hover(
  function() {
    TweenLite.to($(this), 0.3, {
      scale:1.5,
      rotation: 130,
      borderRadius:"50% 50%"
    });
  },
  function() {
    TweenLite.to($(this), 0.7, {
      scale:1,
      rotation:0,
      borderRadius:"0% 0%"
    });
  }
);