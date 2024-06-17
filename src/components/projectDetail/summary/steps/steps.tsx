import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { StepsProps } from "./model";
import TextMaskY from "@/app/lib/animations/textY/textY";
import Image from "next/image";

const Steps: React.FC<StepsProps> = ({ steps }) => {
  return (
    <Box
      w="100%"
      h="auto"
      p={[
        "0px 20px 0px 20px",
        "0px 30px 0px 30px",
        "60px 80px 60px 80px",
        "60px 180px 120px 180px",
        "60px 240px 120px 240px",
      ]}
    >
      {steps.map((item: any, i: number) => {
        const stepNumber = `[ 0${i + 1} ]`;
        return (
          <Stack direction="column" spacing="120px" key={item.title}>
            <Box w="100%" h="auto" pt="120px">
              <Box w="100%">
                <TextMaskY
                  text={[stepNumber]}
                  variant={[
                    "H8HATTONREGULAR",
                    "H7HATTONREGULAR",
                    "H7HATTONREGULAR",
                    "H6HATTONREGULAR",
                    "H6HATTONREGULAR",
                  ]}
                  delay={0.25}
                  isFooter={false}
                  className=""
                  once
                />
                <Box w="100%" pt={["10px", "20px", "30px", "30px", "30px"]}>
                  <TextMaskY
                    text={[item.title]}
                    variant={[
                      "H7HATTONREGULAR",
                      "H6HATTONREGULAR",
                      "H6HATTONREGULAR",
                      "H5HATTONREGULAR",
                      "H5HATTONREGULAR",
                    ]}
                    delay={0.25}
                    isFooter={false}
                    className=""
                    once
                  />
                </Box>
                <Box w="100%" pt={["40px", "40px", "60px", "60px", "60px"]}>
                  <SimpleGrid
                    w="100%"
                    h="100%"
                    columns={[1, 1, 2, 2, 2]}
                    spacing="40px"
                  >
                    {item.content.map((content: any, idx: number) => {
                      return (
                        <motion.div
                          key={content}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.25,
                          }}
                        >
                          <Box
                            pl="20px"
                            w="100%"
                            borderLeft="1px solid #F9EBBB"
                          >
                            <Text variant="MDREGULAR" color="egg.400">
                              {content}
                            </Text>
                          </Box>
                        </motion.div>
                      );
                    })}
                  </SimpleGrid>
                </Box>
                {item.images.map((image: any, imgIdx: number) => {
                  return (
                    <motion.div
                      key={image.url}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.25,
                      }}
                    >
                      <Box w="100%" pt="80px">
                        <Image
                          src={image.url}
                          alt={image.url}
                          placeholder="blur"
                          width={400}
                          height={400}
                          blurDataURL={image.base64}
                          style={{ width: "100%", objectFit: "cover" }}
                        />
                      </Box>
                    </motion.div>
                  );
                })}
              </Box>
            </Box>
          </Stack>
        );
      })}
    </Box>
  );
};

export default Steps;
