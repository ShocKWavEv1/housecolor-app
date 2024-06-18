"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCustomCursor = (videoRef: any) => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll(
      ".image-gallery, .video-reel, .play-cursor"
    );
    const cursorText: any = document.querySelector(".cursor-text");

    const onMouseMove = (event: any) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const updateCursorText = () => {
      if (videoRef.current && !videoRef.current.paused) {
        cursorText.textContent = "Pause";
      } else {
        cursorText.textContent = "Play";
      }
    };

    const onMouseEnterLink = (event: any) => {
      const link = event.target;

      if (link.classList.contains("play-cursor")) {
        gsap.to(cursor, { width: 120, height: 120, cursor: "none" });
        cursorText.style.display = "block";
        videoRef && updateCursorText();
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

    if (videoRef.current) {
      videoRef.current.addEventListener("play", updateCursorText);
      videoRef.current.addEventListener("pause", updateCursorText);
    }

    document.addEventListener("mousemove", onMouseMove);

    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
      if (videoRef.current) {
        videoRef.current.removeEventListener("play", updateCursorText);
        videoRef.current.removeEventListener("pause", updateCursorText);
      }
    };
  }, [videoRef]);

  // Return any necessary values or nothing if not needed
};

export default useCustomCursor;
