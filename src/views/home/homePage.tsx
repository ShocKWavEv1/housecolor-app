"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { HomePageProps } from "./model";
import Clients from "@/components/clients/clients";
import Discover from "@/components/discover/discover";
import Footer from "@/components/footer/footer";
import Cursor from "@/components/cursor/customCursor";
import { customCursor } from "@/app/lib/gsap/gsap";

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

const HomePage: React.FC<HomePageProps> = ({ contentData }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <NoiseGradient />
      <ProjectsGrid projectList={contentData.projects} />
      <Clients />
      <Manifesto />
      <Discover />
      <Reel videoRef={videoRef} />
      <Capture />
      <ParallaxGrid parallaxGrid={contentData.parallaxGrid} />
      <Team crew={contentData.crew} />
      <Footer />
    </Box>
  );
};

export default HomePage;
