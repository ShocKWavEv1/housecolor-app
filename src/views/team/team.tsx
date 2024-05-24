"use client";

import { Box } from "@chakra-ui/react";
import { TeamPageProps } from "./model";
import Footer from "@/components/footer/footer";
import { GRASS_SHADER } from "@/app/lib/shaders/shaders";
import Hero from "@/components/hero/hero";

const TeamPage: React.FC<TeamPageProps> = ({ contentData }) => {
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
