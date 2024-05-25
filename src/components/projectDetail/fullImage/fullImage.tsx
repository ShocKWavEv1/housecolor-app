import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FullImageProps } from "./model";
import Image from "next/image";

const FullImage: React.FC<FullImageProps> = ({ image, base64 }) => {
  return (
    <Box w="100%">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <Image
          src={image}
          alt={image}
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={base64}
          style={{ width: "100%", objectFit: "cover" }}
        />
      </motion.div>
    </Box>
  );
};

export default FullImage;
