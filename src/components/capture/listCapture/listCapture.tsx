import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ListCaptureProps } from "./model";
import { motion } from "framer-motion";
import TextMaskY from "@/app/lib/animations/textY/textY";

const ListCapture: React.FC<ListCaptureProps> = ({ services }) => {
  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p={["0px 0px", "0px 20px", "0px 20px", "0px 20px", "0px 20px"]}
    >
      <Box w={["100%", "100%", "100%", "80%", "80%"]} h="auto" mt="80px">
        <Box w="100%">
          <SimpleGrid w="100%" h="100%" columns={[1, 1, 2, 3]} spacing="50px">
            {services.map((item: any, i: number) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <Box
                    w="100%"
                    h="auto"
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    flexDirection="column"
                    p="20px"
                  >
                    <TextMaskY
                      text={[item.number]}
                      variant="H8HATTONREGULAR"
                      once={true}
                      delay={0.45}
                      isFooter={false}
                      className=""
                    />
                    <Box pt="20px">
                      <TextMaskY
                        text={[item.title]}
                        variant="H8HATTONREGULAR"
                        once={true}
                        delay={0.45}
                        isFooter={false}
                        className=""
                      />
                    </Box>
                    <Box pt="50px">
                      <Stack direction="column" spacing="10px">
                        {item.bullets.map((bullet: any, j: number) => {
                          return (
                            <Text key={j} variant="MDMEDIUM" color="egg.400">
                              {bullet}
                            </Text>
                          );
                        })}
                      </Stack>
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default ListCapture;

/*        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <Text variant="MDREGULAR" color="egg.200">
            We start where others stop. We question the norm. We don’t repeat
            what has been done.
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <Text pt="40px" variant="MDREGULAR" color="egg.200">
            United as friends. Unbound by tradition. The best teams are
            independent spirits working in harmony. We start where others stop.
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          <Box pt="40px">
            <Button
              variant="solid"
              bg="white"
              borderColor="white"
              size="xs"
              color="black"
            >
              Our services →
            </Button>
          </Box>
        </motion.div>*/
