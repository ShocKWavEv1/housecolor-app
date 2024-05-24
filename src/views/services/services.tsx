"use client";

import { Box } from "@chakra-ui/react";
import { ServicesPageProps } from "./model";
import Hero from "@/components/hero/hero";
import Clients from "@/components/clients/clients";
import Discover from "@/components/discover/discover";
import Reel from "@/components/reel/reel";
import Footer from "@/components/footer/footer";
import { useRef } from "react";
import ServicesGrid from "@/components/servicesGrid/servicesGrid";
import { ORANGE_SHADER } from "@/app/lib/shaders/shaders";

const ServicesPage: React.FC<ServicesPageProps> = () => {
  const videoRef = useRef(null);
  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <Hero
        text={["We build brands across visual", "communications"]}
        shader={ORANGE_SHADER}
      />
      <ServicesGrid />
      <Clients />
      <Discover />
      <Reel videoRef={videoRef} />
      <Footer />
    </Box>
  );
};

export default ServicesPage;
