import {
  Box,
  Heading,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { StepsProps } from "./model";

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
                <Box w="auto"></Box>
                <Skeleton startColor="egg.200" endColor="gray.200">
                  <Heading
                    variant={[
                      "H8HATTONREGULAR",
                      "H7HATTONREGULAR",
                      "H7HATTONREGULAR",
                      "H6HATTONREGULAR",
                      "H6HATTONREGULAR",
                    ]}
                  >
                    {stepNumber}
                  </Heading>
                </Skeleton>
                <Box w="100%" pt={["10px", "20px", "30px", "30px", "30px"]}>
                  <Skeleton startColor="egg.200" endColor="gray.200">
                    <Heading
                      variant={[
                        "H7HATTONREGULAR",
                        "H6HATTONREGULAR",
                        "H6HATTONREGULAR",
                        "H5HATTONREGULAR",
                        "H5HATTONREGULAR",
                      ]}
                    >
                      {item.title}
                    </Heading>
                  </Skeleton>
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
                        <Box
                          key={content}
                          pl="20px"
                          w="100%"
                          borderLeft="1px solid #F9EBBB"
                        >
                          <Skeleton startColor="egg.200" endColor="gray.200">
                            <Text variant="MDREGULAR" color="egg.400">
                              {content}
                            </Text>
                          </Skeleton>
                        </Box>
                      );
                    })}
                  </SimpleGrid>
                </Box>
                {item.images.map((image: any, imgIdx: number) => {
                  return (
                    <Box key={image} w="100%" pt="80px">
                      <Skeleton startColor="egg.200" endColor="gray.200">
                        <Box w="100%" h="500px" />
                      </Skeleton>
                    </Box>
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
