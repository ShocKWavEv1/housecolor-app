"use client";

import { Box } from "@chakra-ui/react";
import { ReelProps } from "./model";
import { useEffect, useState } from "react";

const ReelProject: React.FC<ReelProps> = ({
  videoRef,
  videoFull,
  videoReel,
}) => {
  const [showFullReel, setShowFullReel] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  return (
    <Box>
      <Box
        display={showFullReel ? "none" : "block"}
        bg={isVideoLoading ? "lenis" : "black"}
      >
        <video
          controls={false}
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted
          width="100%"
          height="100%"
          onLoadedData={() => {
            setIsVideoLoading(false);
          }}
        >
          <source src={videoFull} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
};

export default ReelProject;
