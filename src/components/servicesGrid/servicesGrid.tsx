import SectionHeader from "@/components/sectionHeader/sectionHeader";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fullServices } from "./constants";
import { ServicesGridProps } from "./model";
import TextMaskY from "@/app/lib/animations/textY/textY";

const ServicesGrid: React.FC<ServicesGridProps> = () => {
  return (
    <Box
      w="100%"
      p={[
        "60px 20px 0px 20px",
        "60px 30px 0px 30px",
        "100px 60px 0px 60px",
        "100px 80px 0px 80px",
        "100px 80px 0px 80px",
      ]}
      className="bg-noise"
    >
      <SectionHeader
        section="services"
        title="We help brands be their most inspiring selves. Own their quirks - their edge - their culture"
        brackets={"[ you are looking for a partner rather than a supplier ]"}
        hasButton={false}
        isDark
      />
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mb="120px"
      >
        <Box
          w={["100%", "100%", "80%", "80%", "80%"]}
          h="auto"
          mt={["40px", "50px", "80px", "80px", "80px"]}
        >
          <SimpleGrid width="100%" columns={[1, 1, 2, 2]} spacing="0px">
            {fullServices.map((item: any, i: number) => {
              return (
                <Box
                  p={[
                    "60px 20px",
                    "60px 30px",
                    "60px 40px",
                    "60px 40px",
                    "60px 40px",
                  ]}
                  w="100%"
                  h={["auto", "auto", "77vh", "77vh", "77vh"]}
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  flexDirection="column"
                  key={item}
                  borderRight={
                    i === 0 || i === 2 || i === 4 ? "1px solid #fff" : ""
                  }
                  borderBottom={i === 4 || i === 5 ? "" : "1px solid #fff"}
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
                        "H8HATTONREGULAR",
                        "H8HATTONREGULAR",
                        "H7HATTONREGULAR",
                        "H7HATTONREGULAR",
                        "H7HATTONREGULAR",
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
                          "H8HATTONREGULAR",
                          "H7HATTONREGULAR",
                          "H6HATTONREGULAR",
                          "H6HATTONREGULAR",
                          "H6HATTONREGULAR",
                        ]}
                        className=""
                        isFooter={false}
                      />
                    </Box>
                  </Box>
                  <Box
                    w="100%"
                    h="100%"
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-end"
                    flexDirection="column"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.75,
                      }}
                    >
                      <Text
                        pt={["80px", "80px", "0px", "0px", "0px"]}
                        variant={[
                          "MDREGULAR",
                          "MDREGULAR",
                          "LGREGULAR",
                          "LGREGULAR",
                          "LGREGULAR",
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
  );
};

export default ServicesGrid;
