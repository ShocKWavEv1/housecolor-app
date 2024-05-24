import { Box } from "@chakra-ui/react";
import React from "react";
import { PreloaderProps } from "./model";
import { motion } from "framer-motion";
import TextMaskY from "@/app/lib/animations/textY/textY";

const Preloader: React.FC<PreloaderProps> = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2, duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "black",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        w="100%"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        className="preloader"
      >
        <Box
          w="100%"
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          {/*<Box
            pb="20px"
            w="60px"
            pointerEvents="all"
            cursor="pointer"
            className="link"
          >
            <SlideY direction={0} delay={0.25} duration={0.75}>
              <Image priority src={circles} alt="housecolor logo" />
            </SlideY>
          </Box>*/}
          <Box className="text-container">
            <TextMaskY
              text={["housecolor | studio"]}
              variant={[
                "H10THIN",
                "H10THIN",
                "H10THIN",
                "H10THIN",
                "H10THIN",
                "H9THIN",
              ]}
              delay={0.25}
              isFooter={false}
              className=""
              once
            />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Preloader;
