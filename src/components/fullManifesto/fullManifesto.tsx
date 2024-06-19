"use client";

import SectionHeader from "@/components/sectionHeader/sectionHeader";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { fullManifestoSteps } from "./constants";
import { FullManifestoProps } from "./model";
import { useWindowSize } from "@uidotdev/usehooks";
import TextMaskY from "@/app/lib/animations/textY/textY";
import { motion } from "framer-motion";

const FullManifesto: React.FC<FullManifestoProps> = () => {
  const { width }: { width: any } = useWindowSize();

  const handleBorderRight = (index: any) => {
    if (width >= 992) {
      if (index === 0 || index === 2 || index === 4) {
        return "1px solid";
      }
    } else {
      return;
    }
  };

  const handleBorderBottom = (isLastIndex: any, isSecondToLastIndex: any) => {
    if (width >= 992) {
      if (isLastIndex) {
        return "";
      } else if (isSecondToLastIndex) {
        return "";
      }
      return "1px solid white";
    } else {
      if (isLastIndex) {
        return "";
      }
      return "1px solid white";
    }
  };

  return (
    <Box
      w="100%"
      p={[
        "80px 20px 0px 20px",
        "80px 30px 0px 30px",
        "120px 60px 0px 60px",
        "120px 80px 0px 80px",
        "120px 80px 0px 80px",
      ]}
    >
      <SectionHeader
        section="about"
        title=""
        brackets=""
        hasButton={false}
        isDark
      />
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
          pt={["10px", "30px", "80px", "80px", "80px"]}
          className="split"
        >
          <Heading
            variant={[
              "H7HATTONREGULAR",
              "H6HATTONREGULAR",
              "H5HATTONREGULAR",
              "H5HATTONREGULAR",
              "H5HATTONREGULAR",
            ]}
            color="egg.400"
          >
            Allow us to be the cool part of your next project
          </Heading>
          <Box pt="40px">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.25,
              }}
            >
              <Text
                variant={[
                  "LGREGULAR",
                  "XLREGULAR",
                  "XXLREGULAR",
                  "XXLREGULAR",
                  "XXLREGULAR",
                ]}
                color="egg.400"
              >
                Housecolor is a Mexican creative studio imagined by Rodrigo
                Salmerón and Baruc Narvaez. We help brands that do good Tambiéns
                logo on a flag stand out and find their people by providing a
                full creative service, videos and courses. We help brands be
                their most inspiring selves. Own their quirks - their edge -
                their culture. Help them be confidently attractive. At home, and
                abroad.
              </Text>
            </motion.div>
          </Box>
          <Box pt="80px">
            <Heading
              variant={[
                "H8HATTONREGULAR",
                "H8HATTONREGULAR",
                "H7HATTONREGULAR",
                "H7HATTONREGULAR",
                "H7HATTONREGULAR",
              ]}
              color="egg.400"
            >
              - More than a statement. This is our manfesto
            </Heading>
            <Text pt="10px" variant="MDREGULAR" color="egg.400">
              {`[ siguiendo estos principios, desarrollamos las mejores estrategias digitales ]`}
            </Text>
          </Box>
          <Box w="100%" h="100%" mt={["40px", "50px", "80px", "80px", "80px"]}>
            <SimpleGrid w="100%" h="100%" columns={[1, 1, 2, 2, 2]}>
              {fullManifestoSteps.map((item: any, i: number) => {
                const isLastIndex = i === fullManifestoSteps.length - 1;
                const isSecondToLastIndex = i === fullManifestoSteps.length - 2;
                return (
                  <Box
                    key={item.title}
                    w="100%"
                    h="auto"
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    flexDirection="column"
                    p={["60px 20px", "40px", "40px", "40px", "40px"]}
                    borderRight={handleBorderRight(i)}
                    borderBottom={handleBorderBottom(
                      isLastIndex,
                      isSecondToLastIndex
                    )}
                    borderColor="egg.200"
                  >
                    <Box
                      w="100%"
                      h="100%"
                      display="flex"
                      flexDirection="column"
                    >
                      <Box
                        w="100%"
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        flexDirection="column"
                      >
                        <TextMaskY
                          text={[item.number]}
                          delay={0.45}
                          once
                          variant={[
                            "H9HATTONREGULAR",
                            "H8HATTONREGULAR",
                            "H8HATTONREGULAR",
                            "H8HATTONREGULAR",
                            "H8HATTONREGULAR",
                          ]}
                          className=""
                          isFooter={false}
                        />
                        <Box pt="20px">
                          <TextMaskY
                            text={[item.title]}
                            delay={0.45}
                            once
                            variant={[
                              "H9HATTONREGULAR",
                              "H8HATTONREGULAR",
                              "H8HATTONREGULAR",
                              "H8HATTONREGULAR",
                              "H8HATTONREGULAR",
                            ]}
                            className=""
                            isFooter={false}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      w="100%"
                      h="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.75,
                          delay: 0.25,
                        }}
                      >
                        <Text
                          pt={["40px", "60px", "80px", "80px", "80px"]}
                          variant={[
                            "SMREGULAR",
                            "MDREGULAR",
                            "MDREGULAR",
                            "MDREGULAR",
                            "MDREGULAR",
                          ]}
                          color="egg.400"
                        >
                          {item.description}
                        </Text>
                      </motion.div>
                    </Box>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FullManifesto;
