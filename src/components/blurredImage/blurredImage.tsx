import { Box } from "@chakra-ui/react";
import { BlurredImageProps } from "./model";
import Image from "next/image";

const BlurredImage: React.FC<BlurredImageProps> = ({ image, base64 }) => {
  return (
    <Box
      w="100%"
      h="100%"
      transition="transform 0.5s ease"
      _hover={{ transform: "scale(1.2)" }}
    >
      <Image
        src={image}
        alt={image}
        placeholder="blur"
        blurDataURL={base64 ? base64 : ""}
        width={500}
        height={600}
        style={{ width: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};

export default BlurredImage;
