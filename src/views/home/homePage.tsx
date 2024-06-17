"use client";

import { Suspense, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { HomePageProps } from "./model";
import Clients from "@/components/clients/clients";
import Footer from "@/components/footer/footer";
import MarqueeScrollText from "@/components/marqueeScrollText/marqueeScrollText";
import { marqueeText } from "./constants";

const NoiseGradient = dynamic(
  () => import("@/components/noiseGradient/noiseGradient")
);

const ProjectsGrid = dynamic(
  () => import("@/components/projectsGrid/projectsGrid")
);

const Manifesto = dynamic(() => import("@/components/manifesto/manifesto"));

const Reel = dynamic(() => import("@/components/reel/reel"));

const ParallaxGrid = dynamic(
  () => import("@/components/parallaxGrid/parallaxGrid")
);

const Capture = dynamic(() => import("@/components/capture/capture"));

const Team = dynamic(() => import("@/components/team/team"));

const HomePage: React.FC<HomePageProps> = ({ contentData, contentReel }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <NoiseGradient />
      <Suspense fallback={"laoding..."}>
        <ProjectsGrid projectList={contentData.projects} />
      </Suspense>
      <Clients />
      <Manifesto />
      <MarqueeScrollText marqueeText={marqueeText} />
      <Reel
        videoRef={videoRef}
        videoFull={contentReel.mainReel[0].videoFull}
        videoReel={contentReel.mainReel[0].videoFile}
      />
      <Capture />
      <Suspense fallback={"laoding..."}>
        <ParallaxGrid parallaxGrid={contentData.parallaxGrid} />
      </Suspense>
      <Suspense fallback={"laoding..."}>
        <Team crew={contentData.crew} />
      </Suspense>
      <Footer />
    </Box>
  );
};

export default HomePage;
