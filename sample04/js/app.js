var menu = $(".menu"),
    menuitem1 = $(".menu__item--1"),
    menuitem2 = $(".menu__item--2"),
    menuitem3 = $(".menu__item--3"),
    speed = 0.15;

var tl = new TimelineLite({paused:true});

tl.to(menuitem1, speed, {top: 20, ease:Quint.easeOut}, "label--1") 
  .to(menuitem3, speed, {top: -20, ease:Quint.easeOut}, "label--1")

  .to([menuitem1, menuitem2, menuitem3], speed, {rotation: -90, ease:Quint.easeOut})

  .to(menuitem1, speed, {left: 20, ease:Quint.easeOut}, "label--2")
  .to(menuitem3, speed, {right: 20, ease:Quint.easeOut}, "label--2"); 


menu.click(function() {
    $(this).toggleClass('active');
    if ( $(this).hasClass("active") ) {
        tl.play(); 
    } else {
        tl.reverse(); 
    }
});