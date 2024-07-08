"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Box, Heading } from "@chakra-ui/react";
import { ProjectDetailProps } from "./model";
import { handleCategoriesToString } from "@/app/lib/sanity/sanity";
import MainTitle from "@/components/projectDetail/mainTitle/mainTitle";
import Footer from "@/components/footer/footer";
import useSWR from "swr";
import { fetcher, swrOptions } from "@/app/lib/swrConfig/swrConfig";
import SkeletonProjectDetail from "@/components/skeletonProjectDetail/skeletonProjectDetail";

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

const ProjectDetail: React.FC<ProjectDetailProps> = () => {
  const [currentProject, setCurrentProject] = useState<any>();
  const [notFound, setNotFound] = useState(false);

  const params = useParams();

  const videoRef = useRef(null);

  const { data, isLoading } = useSWR(
    `/api/projectDetail/${params.projectId}`,
    fetcher,
    swrOptions
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const projectDetailSWR = data.projectDetail;
      if (data.error) {
        setNotFound(true);
      }
      setCurrentProject(projectDetailSWR);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (notFound) {
    return (
      <Box
        w="100%"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Heading variant="H4HATTONREGULAR" color="egg.400" textAlign="center">
          No project found
        </Heading>
      </Box>
    );
  }

  return isLoading ? (
    <SkeletonProjectDetail />
  ) : (
    currentProject && (
      <Box w="100%" h="auto" bg="black" placeItems="center">
        <MainTitle
          title={[currentProject?.name]}
          categories={[
            `[ ${handleCategoriesToString(currentProject?.categories)} ]`,
          ]}
        />
        <ReelProject
          videoRef={videoRef}
          videoReel={currentProject?.videoFile}
          videoFull={currentProject?.videoFull}
        />
        <Synopsis synopsis={currentProject?.synopsis} />
        <FullImage
          image={currentProject?.mainImage}
          base64={currentProject?.base64}
        />
        <Summary sections={currentProject?.sections} />
        <Footer />
      </Box>
    )
  );
};

export default ProjectDetail;
