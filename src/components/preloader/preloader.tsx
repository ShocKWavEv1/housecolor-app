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
            <motion.div
              key={"curtain"}
              exit={{
                transition: { duration: 1 },
                opacity: 0,
                y: 0,
                display: "none",
              }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                transition: { delay: 0.4, duration: 1 },
                opacity: 1,
                y: 0,
              }}
              style={{ width: "auto", display: "flex" }}
            >
              <Box>
                <span className="loader"></span>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Preloader;
