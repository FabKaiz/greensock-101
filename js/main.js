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

const runStart = () => {
  console.log('onStart');
}

const runUpdate = () => {
  console.log('Update'); // You can use this for loading bar
}

const runComplete = () => {
  console.log('Complete');
}

const timeline = gsap.timeline({ 
  duration: .7,
  paused: true,
  onStart: runStart,
  onUpdate: runUpdate,
  onComplete: runComplete,
});


timeline.fromTo(
    'body',
    { backgroundColor : '#fff'},
    { backgroundColor : '#76c897', duration: 2, opacity: 1 })
  .fromTo(
    'h1',
    { y: -40, opacity: 0 },
    { y: 0, opacity: 1 }, '-=1')
  .fromTo('.intro',
    { y: -40, opacity: 0 },
    { y: 0, opacity: 1 }, '-=0.5')
  .fromTo('img',
    { y: -40, opacity: 0 },
    { y: 0, opacity: 1 })

  .fromTo('h2',
    { y: -40, opacity: 0 },
    { y: 0, opacity: 1 })
  .fromTo('ul',
    { y: -40, opacity: 0 },
    { y: 0, opacity: 1 })


    const playButton = document.getElementById('btnPlay');
    const pauseButton = document.getElementById('btnPause');
    const resumeButton = document.getElementById('btnResume');
    const reverseButton = document.getElementById('btnReverse');
    const speedUpButton = document.getElementById('btnSpeedUp');
    const slowDownButton = document.getElementById('btnSlowDown');
    const seekButton = document.getElementById('btnSeek');
    const progressButton = document.getElementById('btnProgress');
    const restartButton = document.getElementById('btnRestart');

    playButton.addEventListener('click', () => timeline.play());
    pauseButton.addEventListener('click', () => timeline.pause());
    resumeButton.addEventListener('click', () => timeline.resume());
    reverseButton.addEventListener('click', () => timeline.reverse());
    speedUpButton.addEventListener('click', () => timeline.timeScale(2));
    slowDownButton.addEventListener('click', () => timeline.timeScale(0.5));
    seekButton.addEventListener('click', () => timeline.seek(2));
    progressButton.addEventListener('click', () => timeline.progress(0.5));
    restartButton.addEventListener('click', () => timeline.restart());
