"use client";

import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { HomePageProps } from "./model";
import Clients from "@/components/clients/clients";
import NoiseGradient from "@/components/noiseGradient/noiseGradient";
import Manifesto from "@/components/manifesto/manifesto";
import Discover from "@/components/discover/discover";
import Reel from "@/components/reel/reel";
import Capture from "@/components/capture/capture";
import ParallaxGrid from "@/components/parallaxGrid/parallaxGrid";
import Team from "@/components/team/team";
import ProjectsGrid from "@/components/projectsGrid/projectsGrid";
import Footer from "@/components/footer/footer";

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
