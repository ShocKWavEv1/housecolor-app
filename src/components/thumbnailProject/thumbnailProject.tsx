"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { ThumbnailProjectProps } from "./model";
import { motion } from "framer-motion";
import { useState } from "react";
import { anim } from "./constants";
import Image from "next/image";
import Link from "next/link";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";

const ThumbnailProject: React.FC<ThumbnailProjectProps> = ({ project }) => {
  const [isActive, setIsActive] = useState(false);

  const isTouchableDevice = useIsTouchDevice();

  return (
    <Link href={`/work/${project.slug.current}`} prefetch>
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
                {`[ ${project.number} ]`}
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
              {project.splittedNames[0].name_1}
            </Heading>
            <motion.div
              variants={anim}
              animate={isActive ? "open" : "closed"}
              className="imgContainer"
            >
              <Box w={["100px", "120px", "150px", "180px", "200px"]} h="100px">
                <Image
                  src={project.shortImage}
                  alt="thumbnail"
                  placeholder="blur"
                  blurDataURL={project.base64Short}
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
              {project.splittedNames[0].name_2}
            </Heading>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default ThumbnailProject;
