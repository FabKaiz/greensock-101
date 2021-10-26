gsap.registerPlugin(ScrollTrigger);

function init(){
  // fade in the scroll trigger
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
      start: 'top bottom-=20%',
      scrub: true,
      // markers: true,
    }
  });

  parallaxTl
    .from('.content-wrapper', {duration: 0.4, autoAlpha: 0}, 0.4)
    .from('.bcg', {duration: 6, y: '-40%'}, 0)

  // Pin 
  // gsap.to(['#intro h1', '#intro p'], {
  //   autoAlpha: 0,
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: '#intro .content',
  //     start: 'top top',
  //     pin: true,
  //     scrub: true,
  //     // markers: true,
  //   }
  // })

  // Fade in
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    gsap.from(project, {
      opacity: 0,
      yPercent: 5,
      scrollTrigger: {
        trigger: project.querySelector('img'),
        start: 'top bottom-=300',
        end: 'top center',
        toggleActions: 'play none none reverse',
        scrub: true,
        onUpdate: ({progress, direction, isActive, getVelocity}) => console.log(progress, direction, isActive, getVelocity()),
        onToggle: () => console.log('toggled'),
        // etc
        // markers: true,
      }
    })
  })
}

window.addEventListener('load', function(){
    init();
});
