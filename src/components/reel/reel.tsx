"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReelProps } from "./model";

const Reel: React.FC<ReelProps> = ({ videoRef }) => {
  const [showFullReel, setShowFullReel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("play", () => {
        setIsPlaying(true);
      });
      videoRef.current.addEventListener("pause", () => {
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <Box
      className="play-cursor"
      onClick={() => {
        setShowFullReel(true);
        handlePlayPause();
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 250 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Box display={showFullReel ? "none" : "block"}>
          <video
            ref={videoRef}
            controls={false}
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted
            width="100%"
            height="100%"
            onClick={handlePlayPause}
          >
            <source src="static/media/reel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Box display={showFullReel ? "block" : "none"}>
          <video
            ref={videoRef}
            controls={false}
            autoPlay={true}
            loop={true}
            playsInline={true}
            muted
            width="100%"
            height="100%"
            onClick={handlePlayPause}
          >
            <source src="static/media/saigon.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Reel;
