document.getElementById('homeCont').addEventListener('click', function() {
  document.querySelector('.menus').classList.toggle('active2');
});

$(window).mousemove(function (e) {
  $(".ring").css(
    "transform",
    `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
  );
});

window.jumpTo = window.scrollTo;
window.scrollTo = () => {
};
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  mobile:{
    smooth:true
  },
});

locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

var loader = document.getElementById("preloader");

window.addEventListener("load",function(){
  loader.style.display="none";
})

var tl1 = gsap.timeline({ duration: 0.5, delay: 0.5 });

tl1.from(".a1", {
  y:-50,
  opacity:0,
});

tl1.from(".home-header", {
  y:50,
  opacity:0,
});

tl1.from(".a2", {
  y:50,
  opacity:0,
  stagger:0.1,
  duration:0.5,
});


gsap.from(".a3", {
  scrollTrigger: {
    trigger: ".section2",
    scroller: "#main",
    markers:false,
    start:"10% 50%",
     

  },
  y:"100%",
  duration:0.6,
});

gsap.from(".a4", {
  scrollTrigger: {
    trigger: ".section2",
    scroller: "#main",
    markers:false,
    start:"20% 50%",
     
  },
  x:"-100%",
  ease:"power1.out",
  duration:0.5,
});

gsap.from(".a5", {
  scrollTrigger: {
    trigger: ".section3",
    scroller: "#main",
    markers:false,
    start:"10% 50%",
     
  },
  y:"100%",
  duration:0.6,
});

gsap.from(".a6", {
  scrollTrigger: {
    trigger: ".section3",
    scroller: "#main",
    markers:false,
    start:"10% 50%",
     
  },
  y:70,
  opacity:0,
  duration:0.8,
});

gsap.from(".a7", {
  scrollTrigger: {
    trigger: ".section3",
    scroller: "#main",
    markers:false,
    start:"40% 50%",
     
  },
  y:"100%",
  duration:0.6,
});

gsap.from(".a8", {
  scrollTrigger: {
    trigger: ".section3",
    scroller: "#main",
    markers:false,
    start:"40% 50%",
     
  },
  y:50,
  duration:0.6,
  opacity:0,
});

gsap.from(".a9", {
  scrollTrigger: {
    trigger: ".section3",
    scroller: "#main",
    markers:false,
    start:"50% 50%",
     
  },
  y:"100%",
  duration:0.6,
});

gsap.from(".a10", {
  scrollTrigger: {
    trigger: ".section3",
    scroller: "#main",
    markers:false,
    start:"50% 50%",
     
  },
  y:50,
  duration:0.6,
  opacity:0,
});

gsap.from(".a11", {
  scrollTrigger: {
    trigger: ".section3",
    scroller: "#main",
    markers:false,
    start:"70% 50%",
     
  },
  y:"100%",
  duration:0.6,
});

gsap.from(".a12", {
  scrollTrigger: {
    trigger: ".section3",
    scroller: "#main",
    markers:false,
    start:"70% 50%",
     
  },
  y:50,
  duration:0.6,
  opacity:0,
});

gsap.from(".a13", {
  scrollTrigger: {
    trigger: ".section4",
    scroller: "#main",
    markers:false,
    start:"0% 50%",
     
  },
  y:"100%",
  duration:0.6,
});


gsap.from(".a14", {
  scrollTrigger: {
    trigger: ".footer",
    scroller: "#main",
    markers:false,
    start:"20% 50%",
     
  },
  y:"100%",
  duration:0.6,
});


//About us page animation--------------------------------//

var tl2 = gsap.timeline({duration: 0.5, delay:0.2,});

tl2.from(".b1",{
  y:100,
})

tl2.from(".b2", {
  y:"100%",
});

tl2.from(".b3", {
  y:100,
  stagger:0.2,
  opacity:0,
});

gsap.from(".b4", {
  scrollTrigger: {
    trigger: ".section5-work",
    scroller: "#main",
    markers:false,
    start:"-50% 50%",
     
  },
  y:"100%",
  duration:0.6,
});


gsap.from(".b5", {
  scrollTrigger: {
    trigger: ".section5-work",
    scroller: "#main",
    markers:false,
    start:"-50% 50%",
     
  },
  y:"-100%",
  duration:0.6,
});


//work page animations--------------------------------//

var tl3 = gsap.timeline({duration:0.5 , delay:0.2,});

tl3.from(".c1",{
  y:"100%",
})

tl3.from(".c2",{
  y:150,
  stagger:0.2,
  opacity:0,
})

tl3.from(".c3",{
  y:100,
  opacity:0,
})


gsap.from(".c4", {
  scrollTrigger: {
    trigger: ".section3-work",
    scroller: "#main",
    markers:false,
    start:"0% 50%",
     
  },
  y:"100%",
  duration:0.6,
});

//----process page animatin----//

var tl4 = gsap.timeline({duration:0.5 , delay:0.2,});

tl4.from(".d1",{
  y:"100%",
  opacity:0,
  stagger:0.4,

})

gsap.from(".d2", {
  scrollTrigger: {
    trigger: ".section2-process",
    scroller: "#main",
    markers:false,
    start:"0% 50%",
     
  },
  y:"100%",
  duration:0.8,
});

gsap.from(".d3", {
  scrollTrigger: {
    trigger: ".section2-process",
    scroller: "#main",
    markers:false,
    start:"0% 50%",
     
  },
  y:"100%",
  duration:0.8,
  opacity:0,
});

gsap.from(".d4", {
  scrollTrigger: {
    trigger: ".section2-process",
    scroller: "#main",
    markers:false,
    start:"35% 50%",
     
  },
  y:"100%",
  duration:0.8,
});

gsap.from(".d5", {
  scrollTrigger: {
    trigger: ".section2-process",
    scroller: "#main",
    markers:false,
    start:"35% 50%",
     
  },
  y:"100%",
  duration:0.8,
  opacity:0,
});

gsap.from(".d6", {
  scrollTrigger: {
    trigger: ".section2-process",
    scroller: "#main",
    markers:false,
    start:"65% 50%",
     
  },
  y:"100%",
  duration:0.8,
});

gsap.from(".d7", {
  scrollTrigger: {
    trigger: ".section2-process",
    scroller: "#main",
    markers:false,
    start:"65% 50%",
     
  },
  y:"100%",
  duration:0.8,
  opacity:0,
});

// blog page animation ---------------//

var tl5 = gsap.timeline({duration:0.5 , delay:0.2,});

tl5.from(".e1",{
  y:"100%",
  opacity:0,
  stagger:0.5,
  opacity:0,
})

tl5.from(".e2",{
  y:80,
  opacity:0,
})


// contact page animation-----------------//

var tl6 = gsap.timeline({duration:0.5 , delay:0.2,});

tl6.from(".f1",{
  y:"100%",
  opacity:0,
})

tl6.from(".f2",{
  y:40,
  opacity:0,
  stagger:0.2,
})


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
