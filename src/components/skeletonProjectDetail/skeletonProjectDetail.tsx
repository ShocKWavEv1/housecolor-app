"use client";

import { Box, Skeleton } from "@chakra-ui/react";
import { SkeletonProjectDetailProps } from "./model";
import MainTitle from "./mainTitle/mainTitle";
import { skeletonSchema } from "./constants";
import Synopsis from "./synopsis/synopsis";
import Summary from "./summary/summary";
import { useEffect } from "react";

const SkeletonProjectDetail: React.FC<SkeletonProjectDetailProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <MainTitle
        title={skeletonSchema.name}
        categories={["[ Correción de color, Edición ]"]}
      />
      <Skeleton startColor="egg.200" endColor="egg.300">
        <Box w="100%" h="100vh" />
      </Skeleton>
      <Synopsis synopsis={skeletonSchema.synopsis} />
      <Skeleton startColor="egg.200" endColor="egg.300">
        <Box w="100%" h="80vh" />
      </Skeleton>
      <Summary sections={skeletonSchema.sections} />
    </Box>
  );
};

export default SkeletonProjectDetail;
