import { Box, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HeroFooterProps } from "./model";
import scroll from "../../../../public/static/bg/arrow_scroll.png";
import { motion } from "framer-motion";
import SlideY from "@/app/lib/animations/slideY/slideY";

const HeroFooter: React.FC<HeroFooterProps> = ({ options }) => {
  return (
    <Box
      w="100%"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      flexDirection="column"
      textAlign="center"
      zIndex={2}
    >
      <SlideY direction={0} delay={0.25} duration={1}>
        <Box
          w="100%"
          h="90px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="20px 50px"
        >
          <Box
            w="auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
                delay: 0,
              }}
              className="scroll"
            >
              <Box
                w={["1vw", "1vw", "1vw", "1vw", "1vw", "1vw"]}
                bg="transparent"
                mb="15px"
              >
                <Image priority src={scroll} alt="housecolor logo" />
              </Box>
            </motion.div>
          </Box>
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            flexDirection="row"
            mb="10px"
          >
            <Stack spacing="80px" direction="row">
              {options.map((item: any) => {
                return (
                  <Box key={item.title} textAlign="right">
                    <Box>
                      <Text
                        variant={[
                          "SMMEDIUM",
                          "SMMEDIUM",
                          "SMMEDIUM",
                          "SMMEDIUM",
                          "SMMEDIUM",
                          "MDMEDIUM",
                        ]}
                        color="egg.400"
                      >
                        {item.title}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        variant={[
                          "SMMEDIUM",
                          "SMMEDIUM",
                          "SMMEDIUM",
                          "SMMEDIUM",
                          "SMMEDIUM",
                          "MDMEDIUM",
                        ]}
                        color="egg.400"
                        opacity={0.75}
                      >
                        {item.label}
                      </Text>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </SlideY>
    </Box>
  );
};

export default HeroFooter;
