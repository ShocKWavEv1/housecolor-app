import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const customCursor = (videoRef?: any) => {
  const cursor: any = document.getElementById("custom-cursor");
  const links: any = document.querySelectorAll(
    ".image-gallery, .video-reel, .play-cursor"
  );

  const cursorText: any = document.querySelector(".cursor-text");

  const onMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    gsap.to(cursor, { x: clientX, y: clientY });
  };

  const updateCursorText = () => {
    if (videoRef.current && !videoRef.current.paused) {
      cursorText.textContent = "Pause"; // Change the cursor text to "Pause"
    } else {
      cursorText.textContent = "Play"; // Change the cursor text to "Play"
    }
  };

  const onMouseEnterLink = (event: any) => {
    const link = event.target;

    if (link.classList.contains("play-cursor")) {
      gsap.to(cursor, { width: 120, height: 120, cursor: "none" });
      cursorText.style.display = "block";
      videoRef && updateCursorText(); // Update cursor text immediately when entering the link
    } else {
      gsap.to(cursor, { width: 120, height: 120, cursor: "none" });
      cursorText.textContent = "View";
      cursorText.style.display = "block";
    }
  };

  const onMouseLeaveLink = () => {
    gsap.to(cursor, { width: 15, height: 15, cursor: "pointer" });
    cursorText.style.display = "none";
  };

  // Add event listeners to the video element for play and pause events
  if (videoRef.current) {
    videoRef.current.addEventListener("play", updateCursorText);
    videoRef.current.addEventListener("pause", updateCursorText);
  }

  document.addEventListener("mousemove", onMouseMove);

  links.forEach((link: any) => {
    link.addEventListener("mouseenter", onMouseEnterLink);
    link.addEventListener("mouseleave", onMouseLeaveLink);
  });
};
