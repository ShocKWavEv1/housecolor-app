import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FullImageProps } from "./model";
import BlurredImage from "@/components/blurredImage/blurredImage";

const FullImage: React.FC<FullImageProps> = ({ image, base64 }) => {
  return (
    <Box w="100%">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <BlurredImage image={image} base64={base64} />
      </motion.div>
    </Box>
  );
};

export default FullImage;
