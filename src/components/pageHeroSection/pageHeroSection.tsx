import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { PageHeroSectionProps } from "./model";
import arrow_down from "../../../public/static/bg/arrow_scroll.png";
import { motion } from "framer-motion";
import TextMaskY from "@/app/lib/animations/textY/textY";

const PageHeroSection: React.FC<PageHeroSectionProps> = ({ text }) => {
  return (
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
        "90px 20px 20px 20px",
        "90px 20px 20px 20px",
        "90px 30px 20px 30px",
        "90px 50px 20px 50px",
        "90px 80px 20px 80px",
        "90px 120px 20px 120px",
      ]}
    >
      <TextMaskY
        variant={[
          "SECONDARYXSHATTONREGULAR",
          "SECONDARYSMHATTONREGULAR",
          "SECONDARYMDHATTONREGULAR",
          "SECONDARYLGHATTONREGULAR",
          "SECONDARYXLHATTONREGULAR",
          "SECONDARYXXLHATTONREGULAR",
        ]}
        text={text}
        delay={0.45}
      />
      <Box
        cursor="pointer"
        display={["none", "none", "block", "block", "block", "block"]}
        position="absolute"
        bottom={"50px"}
        right={"50px"}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
            delay: 0.45,
          }}
          className="scroll"
        >
          <Image
            src={arrow_down}
            alt="arrow_down"
            style={{ opacity: 0.75, width: 20 }}
          />
        </motion.div>
      </Box>
    </Box>
  );
};

export default PageHeroSection;
