import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ImageCardRevealProps } from "./model";
import { handleCategoriesToString } from "@/app/lib/sanity/sanity";
import BlurredImage from "../blurredImage/blurredImage";
import Link from "next/link";

const ImageCardReveal: React.FC<ImageCardRevealProps> = ({
  item,
  height,
  link,
  image,
  base64,
}) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Box
      w="100%"
      h="auto"
      display="flex"
      flexDirection="column"
      className="image-gallery"
    >
      <Link href={link} prefetch>
        <Box
          ref={ref}
          w="100%"
          h={["auto", "600px", "600px", "600px", "600px", "600px"]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          overflow="hidden"
          position="relative"
        >
          <BlurredImage image={image} base64={base64} imageWidth="100vw" />
          {/*<Box
            w="100%"
            h="100%"
            bg="lenis"
            position="absolute"
            zIndex={1}
            top={0}
            left={inView ? "100%" : "0%"}
            transition="left 0.5s cubic-bezier(0.3, 0.2, 0.2, 0.8)"
          />*/}
        </Box>
        <Box
          w="100%"
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
          pt="20px"
        >
          <Heading variant="H10REGULAR" color="egg.400">
            {item.name}
          </Heading>
          <Text
            py="5px"
            textTransform="uppercase"
            variant="SMMEDIUM"
            color="egg.400"
            opacity={0.75}
          >
            {item.categories
              ? handleCategoriesToString(item.categories)
              : item.description}
          </Text>
          <Text variant="SMMEDIUM" color="egg.400" opacity={0.75}>
            {`[ ${item.number} ]`}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export default ImageCardReveal;
