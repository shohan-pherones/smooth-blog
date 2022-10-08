import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 2,
  easing: (x) => 1 - Math.pow(1 - x, 5),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

const raf = function (time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
