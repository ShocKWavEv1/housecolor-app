"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { ProjectDetailProps } from "./model";
import { handleCategoriesToString } from "@/app/lib/sanity/sanity";
import MainTitle from "@/components/projectDetail/mainTitle/mainTitle";
import Footer from "@/components/footer/footer";
import useSWR from "swr";
import { fetcher, swrOptions } from "@/app/lib/swrConfig/swrConfig";

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
  const [currentProject, setCurrentProject] = useState<any>(
    contentData.projectDetail
  );
  const {
    name,
    slug,
    categories,
    mainImage,
    sections,
    synopsis,
    videoFile,
    videoFull,
    base64,
  } = currentProject;

  const videoRef = useRef(null);

  const { data, isLoading } = useSWR(
    `/api/projectDetail/${slug.current}`,
    fetcher,
    swrOptions
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const projectDetailSWR = data.projectDetail;
      setCurrentProject(projectDetailSWR);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <Box w="100%" h="auto" bg="black" placeItems="center">
      <MainTitle
        title={[name]}
        categories={[`[ ${handleCategoriesToString(categories)} ]`]}
      />
      <ReelProject
        videoRef={videoRef}
        videoReel={videoFile}
        videoFull={videoFull}
      />
      <Synopsis synopsis={synopsis} />
      <FullImage image={mainImage} base64={base64} />
      <Summary sections={sections} />
      <Footer />
    </Box>
  );
};

export default ProjectDetail;
