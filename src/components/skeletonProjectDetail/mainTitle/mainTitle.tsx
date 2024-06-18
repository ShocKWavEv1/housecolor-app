"use client";

import { Box, Heading, Skeleton } from "@chakra-ui/react";
import { MainTitleProps } from "./model";
import { useOrientation } from "@uidotdev/usehooks";
import { getSecondaryViewPort } from "@/app/lib/shaders/shaders";

const MainTitle: React.FC<MainTitleProps> = ({ title, categories }) => {
  const { type } = useOrientation();

  return (
    <Box
      w="100%"
      h={getSecondaryViewPort(type)}
      bg="black"
      display="flex"
      alignItems="flex-start"
      position="relative"
    >
      <Box
        as="section"
        w="100%"
        h="100%"
        position="absolute"
        bg="rgba(0,0,0,0.2)"
        top={0}
        bottom={0}
        left={0}
        right={0}
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-end"
        flexDirection="column"
        zIndex={2}
        overflow="hidden"
        p={[
          "180px 20px 40px 20px",
          "240px 30px 60px 30px",
          "240px 60px 60px 60px",
          "240px 80px 60px 80px",
          "240px 80px 60px 80px",
        ]}
      >
        <Skeleton startColor="egg.200" endColor="gray.200">
          <Heading
            variant={[
              "SECONDARYXSHATTONREGULAR",
              "SECONDARYSMHATTONREGULAR",
              "SECONDARYMDHATTONREGULAR",
              "SECONDARYLGHATTONREGULAR",
              "SECONDARYXLHATTONREGULAR",
              "SECONDARYXXLHATTONREGULAR",
            ]}
          >
            {title}
          </Heading>
        </Skeleton>
        <Box w="auto" pt="10px" opacity={[0.75, 1, 1, 1, 1]}>
          <Skeleton startColor="egg.200" endColor="gray.200">
            <Heading
              variant={[
                "H10LIGHT",
                "H10LIGHT",
                "H10LIGHT",
                "H10LIGHT",
                "H10LIGHT",
              ]}
            >
              {categories}
            </Heading>
          </Skeleton>
        </Box>
      </Box>
    </Box>
  );
};

export default MainTitle;
