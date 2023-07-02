r = 100;
adjustJank = 4; 


$(window).on('load', function(){
  $(".slider-wrapper p").each(function () {
    var obj = $(this);
    var d = $(this).width();
    obj.clone().appendTo(obj.parent());
    obj.clone().appendTo(obj.parent()); 
    obj.parent().parent().width(d);

    var t = d / r; 

    gsap.to(
      obj.parent(),
      t,
      {
        x: "-" + (d + adjustJank),
        rotation: 0.01,
        ease: Linear.easeNone,
        repeat: -1,
      }
    );
  });
})
