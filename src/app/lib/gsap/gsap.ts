import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollDiscoverText = () => {
  const textElement1 = document.querySelectorAll(".text-slider");

  gsap.fromTo(
    textElement1,
    { xPercent: 0 },
    {
      xPercent: -2000,
      scrollTrigger: {
        trigger: ".container",
        start: "start start",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );
};
