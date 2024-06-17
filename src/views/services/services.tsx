"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { ServicesPageProps } from "./model";
import Clients from "@/components/clients/clients";
import Footer from "@/components/footer/footer";
import ServicesGrid from "@/components/servicesGrid/servicesGrid";
import { ORANGE_SHADER } from "@/app/lib/shaders/shaders";
import MarqueeScrollText from "@/components/marqueeScrollText/marqueeScrollText";
import { marqueeText } from "../home/constants";

const Hero = dynamic(() => import("@/components/hero/hero"));

const Reel = dynamic(() => import("@/components/reel/reel"));

const ServicesPage: React.FC<ServicesPageProps> = ({ contentReel }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <Hero
        text={["We build brands across visual", "communications"]}
        shader={ORANGE_SHADER}
      />
      <ServicesGrid />
      <Clients />
      <MarqueeScrollText marqueeText={marqueeText} />
      <Reel
        videoRef={videoRef}
        videoFull={contentReel.mainReel[0].videoFull}
        videoReel={contentReel.mainReel[0].videoFile}
      />
      <Footer />
    </Box>
  );
};

export default ServicesPage;
