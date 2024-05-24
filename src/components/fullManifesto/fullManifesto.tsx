import SectionHeader from "@/components/sectionHeader/sectionHeader";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { fullManifestoSteps } from "./constants";
import { FullManifestoProps } from "./model";

const FullManifesto: React.FC<FullManifestoProps> = () => {
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
          <Text
            pt="40px"
            variant={[
              "LGREGULAR",
              "XLREGULAR",
              "XXLREGULAR",
              "XXLREGULAR",
              "XXLREGULAR",
            ]}
            color="egg.400"
          >
            Housecolor is a Mexican creative studio imagined by Rodrigo Salmerón
            and Baruc Narvaez. We help brands that do good Tambiéns logo on a
            flag stand out and find their people by providing a full creative
            service, videos and courses. We help brands be their most inspiring
            selves. Own their quirks - their edge - their culture. Help them be
            confidently attractive. At home, and abroad.
          </Text>
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
          <Box w="100%" mt={["40px", "50px", "80px", "80px", "80px"]}>
            <SimpleGrid w="100%" h="100%" columns={[1, 1, 2, 2, 3]}>
              {fullManifestoSteps.map((item: any, i: number) => {
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
                        <Heading
                          variant={[
                            "H9HATTONREGULAR",
                            "H8HATTONREGULAR",
                            "H8HATTONREGULAR",
                            "H8HATTONREGULAR",
                            "H8HATTONREGULAR",
                          ]}
                          color="egg.400"
                        >
                          {item.number}
                        </Heading>
                        <Heading
                          pt="20px"
                          variant={[
                            "H9HATTONREGULAR",
                            "H8HATTONREGULAR",
                            "H8HATTONREGULAR",
                            "H8HATTONREGULAR",
                            "H8HATTONREGULAR",
                          ]}
                          color="egg.400"
                        >
                          {item.title}
                        </Heading>
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
