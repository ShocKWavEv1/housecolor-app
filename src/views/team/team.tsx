"use client";

import { Box } from "@chakra-ui/react";
import { TeamPageProps } from "./model";
import Footer from "@/components/footer/footer";
import { GRASS_SHADER } from "@/app/lib/shaders/shaders";
import Hero from "@/components/hero/hero";
import { useEffect } from "react";

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
