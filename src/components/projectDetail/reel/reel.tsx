"use client";

import { Box } from "@chakra-ui/react";
import { ReelProps } from "./model";
import { useEffect, useState } from "react";
import BlurredImage from "@/components/blurredImage/blurredImage";
import { base64 } from "./constants";

const ReelProject: React.FC<ReelProps> = ({
  videoRef,
  videoFull,
  videoReel,
}) => {
  const [showFullReel, setShowFullReel] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      className="play-cursor"
      onClick={() => {
        setShowFullReel(true);
        handlePlayPause();
      }}
    >
      <Box display={showFullReel ? "none" : "block"}>
        {isVideoLoading && <BlurredImage image={base64} base64={base64} />}
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
          onLoadedData={() => {
            setIsVideoLoading(false);
          }}
        >
          <source src={videoReel} type="video/mp4" />
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
          <source src={videoFull} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
};

export default ReelProject;