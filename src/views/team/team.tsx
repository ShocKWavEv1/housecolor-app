"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { TeamPageProps } from "./model";
import Footer from "@/components/footer/footer";
import { GRASS_SHADER } from "@/app/lib/shaders/shaders";

const Hero = dynamic(() => import("@/components/hero/hero"));

const TeamPage: React.FC<TeamPageProps> = ({ contentData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <Hero
        text={["We are a collective for", "↔ creative talents."]}
        shader={GRASS_SHADER}
      />
      <Box w="100%" h="100vh"></Box>
      <Footer />
    </Box>
  );
};

export default TeamPage;
