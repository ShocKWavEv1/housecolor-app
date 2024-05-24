import { Box, Show, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FooterMediaProps } from "./model";
import circles from "../../../../public/static/logo/three_circlces.svg";

const FooterMedia: React.FC<FooterMediaProps> = ({ socialMedia }) => {
  return (
    <Box w="100%" h="auto" mt="100px">
      <SimpleGrid w="100%" h="100%" columns={[2, 2, 2, 2]} p="30px 0px">
        <Box
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Box
            w="auto"
            zIndex={2}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            cursor="pointer"
          >
            <Box
              w={["54px", "64px", "54px", "54px", "54px"]}
              pointerEvents="all"
              cursor="pointer"
              className="link"
            >
              <Image width={60} priority src={circles} alt="housecolor logo" />
            </Box>
            <Show above="md">
              <Text
                pl="15px"
                pt="0px"
                opacity={0.75}
                variant="MDMEDIUM"
                color="egg.400"
              >
                MMXXII - housecolor
              </Text>
            </Show>
          </Box>
        </Box>
        <Box
          w="100%"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Stack direction="row" spacing="20px">
            {socialMedia.map((item: any, i: number) => {
              return (
                <Box
                  key={item.name}
                  border="1px solid white"
                  p="2px 15px"
                  borderRadius="25em"
                  color="egg.400"
                  transition=".35s ease-in-out"
                  _hover={{ bg: "egg.400", color: "black" }}
                  cursor="pointer"
                >
                  <Text opacity={0.75} variant="XSMEDIUM" mt="3px">
                    {item.name}
                  </Text>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default FooterMedia;
