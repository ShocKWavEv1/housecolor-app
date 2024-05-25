"use client";

import { Box } from "@chakra-ui/react";
import { ProjectDetailProps } from "./model";
import { handleCategoriesToString } from "@/app/lib/sanity/sanity";
import MainTitle from "@/components/projectDetail/mainTitle/mainTitle";
import FullImage from "@/components/projectDetail/fullImage/fullImage";
import Synopsis from "@/components/projectDetail/synopsis/synopsis";
import Summary from "@/components/projectDetail/summary/summary";
import Footer from "@/components/footer/footer";
import { useEffect } from "react";

const ProjectDetail: React.FC<ProjectDetailProps> = ({ contentData }) => {
  const { name, categories, mainImage, sections, synopsis, videoFile, base64 } =
    contentData.projectDetail;

  useEffect(() => {
    console.log(contentData.projectDetail);
  }, [contentData]);

  return (
    <Box w="100%" h="auto" bg="black" placeItems="center">
      <MainTitle
        title={[name]}
        categories={[`[ ${handleCategoriesToString(categories)} ]`]}
      />
      <video
        controls={false}
        autoPlay={true}
        loop={true}
        playsInline={true}
        muted
        width="100%"
        height="100%"
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Synopsis synopsis={synopsis} />
      <FullImage image={mainImage} base64={base64} />
      <Summary sections={sections} />
      <Footer />
    </Box>
  );
};

export default ProjectDetail;
