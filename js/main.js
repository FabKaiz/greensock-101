// gsap.to('h2', { 
//   duration: 3,
//   backgroundColor: '#f301cb',
//   delay: 2
// })

// gsap.to('ul li', { 
//   duration: 0.4,
//   x: 80,
//   y: 20,
//   ease: "sine.out",
//   stagger: 0.1,
//   repeat: -1,
//   yoyo: true,
//   yoyoEase: 'none'
// })


gsap.fromTo(
  'body',
  { backgroundColor : '#fff'},
  { backgroundColor : '#76c897', duration: 2, opacity: 1 })

gsap.fromTo(
  'h1',
  { y: -40, opacity: 0 },
  { y: 0, duration: 1, delay: 1, opacity: 1 })

gsap.fromTo('.intro',
  { y: -40, opacity: 0 },
  { y: 0, opacity: 1, delay: 1.8, duration: 1 })

gsap.fromTo('img',
  { y: -40, opacity: 0 },
  { y: 0, opacity: 1, delay: 2.5, duration: 1 })

gsap.fromTo('h2',
  { y: -40, opacity: 0 },
  { y: 0, opacity: 1, delay: 3.5, duration: 1 })

gsap.fromTo('ul',
{ y: -40, opacity: 0 },
{ y: 0, opacity: 1, delay: 4.5, duration: 1 })
