import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollDiscoverText = () => {
  const textElement1 = document.querySelectorAll(".text-slider");

  gsap.fromTo(
    textElement1,
    { xPercent: 0 },
    {
      xPercent: -1000,
      scrollTrigger: {
        trigger: ".container",
        start: "start start",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );
};

export const scrollLiveDetailsText = () => {
  const textElement1 = document.querySelectorAll(".text-slider-manifesto-live");
  const textElement2 = document.querySelectorAll(
    ".text-slider-manifesto-live-2"
  );

  gsap.fromTo(
    textElement1,
    { xPercent: 0 },
    {
      xPercent: -270,
      //skewX: 150,
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    textElement2,
    { xPercent: 0 },
    {
      xPercent: -350,
      //skewX: 150,
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );
};

export const scrollClubDetailsText = () => {
  const textElement1 = document.querySelectorAll(".text-slider-manifesto-club");

  gsap.fromTo(
    textElement1,
    { xPercent: 0 },
    {
      xPercent: 80,
      //skewX: 150,
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );
};
