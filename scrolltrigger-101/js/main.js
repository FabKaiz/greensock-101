gsap.registerPlugin(ScrollTrigger);

function init(){
  //fade in the scroll trigger
  gsap.to('#intro img', { opacity: 0, scrollTrigger: {
    trigger: '#intro',
    start: 'top top',
    end: 'bottom center',
    scrub: true,
    // markers: true,
  } });

  // toggle css class on scroll
  gsap.set('#project02', {scrollTrigger: {
    trigger: '#project02',
    start: 'top bottom-=18%',
    end: 'bottom center-=13%',
    toggleClass: 'active',
    // markers: true,
  }});

  // Parallax effect on scroll
  const parallaxTl = gsap.timeline({
    ease: 'none',
    scrollTrigger: {
      trigger: '.bcg-parallax',
      start: 'top bottom',
      scrub: true,
      markers: true,
    }
  });

  parallaxTl
    .from('.content-wrapper', {duration: 0.4, autoAlpha: 0}, 0.4)
    .from('.bcg', {duration: 6, y: '-50%'}, 0)
}

window.addEventListener('load', function(){
    init();
});
