"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { ThumbnailProjectProps } from "./model";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { anim } from "./constants";
import Image from "next/image";
import Link from "next/link";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import useSWR from "swr";
import { fetcher, swrOptions } from "@/app/lib/swrConfig/swrConfig";

const ThumbnailProject: React.FC<ThumbnailProjectProps> = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(projects);

  const { data, isLoading } = useSWR("/api/projects", fetcher, swrOptions);

  useEffect(() => {
    if (!isLoading) {
      const projectListSWR = data.projects;
      setCurrentProject(projectListSWR);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    currentProject &&
    currentProject.map((currentProject: any, index: number) => {
      return <ThumbnailItem currentProject={currentProject} index={index} />;
    })
  );
};

export default ThumbnailProject;

const ThumbnailItem = ({
  currentProject,
  index,
}: {
  currentProject: any;
  index: number;
}) => {
  const [isActive, setIsActive] = useState(false);
  const isTouchableDevice = useIsTouchDevice();

  return (
    <Link key={index} href={`/work/${currentProject?.slug?.current}`} prefetch>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          w={["100%", "100%", "80%", "80%", "80%"]}
          h="auto"
          p="10px 0px"
          mt="0px"
        >
          <Box
            w="100%"
            h="auto"
            onMouseEnter={() => {
              !isTouchableDevice && setIsActive(true);
            }}
            onMouseLeave={() => {
              !isTouchableDevice && setIsActive(false);
            }}
            className={`project image-gallery `}
          >
            <Box w="auto">
              <Text
                variant={[
                  "XSSREGULAR",
                  "XSREGULAR",
                  "SMREGULAR",
                  "SMREGULAR",
                  "SMREGULAR",
                ]}
                color="egg.400"
                pr="10px"
              >
                {`[ ${currentProject?.number} ]`}
              </Text>
            </Box>
            <Heading
              className="thumbnail-text"
              variant={[
                "H9HATTONREGULAR",
                "H7HATTONREGULAR",
                "H7HATTONREGULAR",
                "H7HATTONREGULAR",
                "H6HATTONREGULAR",
                "H6HATTONREGULAR",
              ]}
              color="egg.400"
            >
              {currentProject?.splittedNames[0]?.name_1}
            </Heading>
            <motion.div
              variants={anim}
              animate={isActive ? "open" : "closed"}
              className="imgContainer"
            >
              <Box w={["100px", "120px", "150px", "180px", "200px"]} h="100px">
                <Image
                  src={currentProject?.shortImage}
                  alt="thumbnail"
                  placeholder="blur"
                  blurDataURL={
                    currentProject?.base64Short
                      ? currentProject?.base64Short
                      : currentProject?.base64
                  }
                  sizes="10vw"
                  width={150}
                  height={150}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </motion.div>
            <Heading
              className="thumbnail-text"
              variant={[
                "H9HATTONREGULAR",
                "H7HATTONREGULAR",
                "H7HATTONREGULAR",
                "H7HATTONREGULAR",
                "H6HATTONREGULAR",
                "H6HATTONREGULAR",
              ]}
              color="egg.400"
              ml={"2000px"}
            >
              {currentProject?.splittedNames[0]?.name_2}
            </Heading>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
