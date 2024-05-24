"use client";

import React from "react";
import { Box } from "@chakra-ui/react";
import { HomePageProps } from "./model";
import Clients from "@/components/clients/clients";
import ProjectsGrid from "@/components/projectsGrid/projectsGrid";
import Footer from "@/components/footer/footer";

const HomePage: React.FC<HomePageProps> = ({ contentData }) => {
  return (
    <Box>
      <ProjectsGrid projectList={contentData.projects} />
      <Clients />
      <Footer />
    </Box>
  );
};

export default HomePage;
