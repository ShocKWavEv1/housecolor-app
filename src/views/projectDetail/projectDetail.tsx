"use client";

import { Suspense, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { ProjectDetailProps } from "./model";
import { handleCategoriesToString } from "@/app/lib/sanity/sanity";
import MainTitle from "@/components/projectDetail/mainTitle/mainTitle";
import Footer from "@/components/footer/footer";

const FullImage = dynamic(
  () => import("@/components/projectDetail/fullImage/fullImage")
);

const Synopsis = dynamic(
  () => import("@/components/projectDetail/synopsis/synopsis")
);

const Summary = dynamic(
  () => import("@/components/projectDetail/summary/summary")
);

const ReelProject = dynamic(
  () => import("@/components/projectDetail/reel/reel")
);

const ProjectDetail: React.FC<ProjectDetailProps> = ({ contentData }) => {
  const {
    name,
    categories,
    mainImage,
    sections,
    synopsis,
    videoFile,
    videoFull,
    base64,
  } = contentData.projectDetail;

  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box w="100%" h="auto" bg="black" placeItems="center">
      <MainTitle
        title={[name]}
        categories={[`[ ${handleCategoriesToString(categories)} ]`]}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <ReelProject
          videoRef={videoRef}
          videoReel={videoFile}
          videoFull={videoFull}
        />
      </Suspense>
      <Synopsis synopsis={synopsis} />
      <Suspense fallback={<div>Loading...</div>}>
        <FullImage image={mainImage} base64={base64} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Summary sections={sections} />
      </Suspense>
      <Footer />
    </Box>
  );
};

export default ProjectDetail;
