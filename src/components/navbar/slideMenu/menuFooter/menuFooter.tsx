import { Box, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { translate } from "../../drawer/animation";
import { navLink, socialMedia } from "./constants";
import { MenuFooterProps } from "./model";

const MenuFooter: React.FC<MenuFooterProps> = ({}) => {
  return (
    <Box
      w="100%"
      h="auto"
      bg="black"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      p={[
        "0px 20px 30px 20px",
        "0px 30px 30px 30px",
        "70px 40px 30px 40px",
        "70px 40px 30px 40px",
        "70px 40px 30px 40px",
      ]}
      onClick={(e: any) => e.stopPropagation()}
    >
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="row"
        overflow="hidden"
      >
        <Box
          w="70%"
          display={["none", "none", "flex", "flex", "flex"]}
          alignItems="center"
          justifyContent="flex-start"
          flexDirection="row"
        >
          <Stack direction="row" spacing="40px">
            {navLink.map((item: any, i: number) => {
              return (
                <ul key={item.label}>
                  <motion.li
                    custom={[0.3, 0]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <Text
                      pl="10px"
                      opacity={0.75}
                      variant="XSMEDIUM"
                      color="egg.400"
                      textTransform="uppercase"
                      overflow="hidden"
                    >
                      {item.label}
                    </Text>
                  </motion.li>
                </ul>
              );
            })}
          </Stack>
        </Box>
        <Box
          w={["100%", "100%", "30%", "30%", "30%"]}
          display="flex"
          alignItems="center"
          justifyContent={[
            "flex-start",
            "flex-start",
            "flex-end",
            "flex-end",
            "flex-end",
          ]}
          flexDirection="row"
        >
          <Stack direction="row" spacing="20px">
            {socialMedia.map((item: any, i: number) => {
              return (
                <ul key={item.name}>
                  <motion.li
                    custom={[0.3, 0]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                  >
                    <Box
                      border="1px solid #F9EBBB"
                      p="5px 18px"
                      borderRadius="5vw"
                      color="egg.400"
                      transition=".35s ease-in-out"
                      _hover={{ bg: "egg.500", color: "black" }}
                      cursor="pointer"
                    >
                      <Text pt="0px" variant="XSREGULAR">
                        {item.name}
                      </Text>
                    </Box>
                  </motion.li>
                </ul>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuFooter;
