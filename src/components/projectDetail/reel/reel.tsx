"use client";

import { Box } from "@chakra-ui/react";
import { ReelProps } from "./model";
import { useState } from "react";

const ReelProject: React.FC<ReelProps> = ({
  videoRef,
  videoFull,
  videoReel,
}) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  return (
    <Box>
      <Box bg={isVideoLoading ? "lenis" : "black"}>
        <video
          controls={false}
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted
          width="100%"
          height="100vh"
          preload="none"
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
