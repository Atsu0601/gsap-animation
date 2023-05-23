var tl = new TimelineMax({repeat:3, repeatDelay:3});
tl.to(".line--top", 0.6, {width:"100%", ease: Power2.easeIn})
         .to(".line--right", 0.6, {height:"100%",ease: Power0.easeNone})
         .to(".line--bottom", 0.6, {width:"100%",ease: Power0.easeNone})
         .to(".line--left", 0.6, {height:"100%",ease: Power2.easeOut})
         .to(".mask", 1, {left:"100%"})
         .to(".text", 0.8, {opacity:1})
         .to(".text2", 0.8, {opacity:1});