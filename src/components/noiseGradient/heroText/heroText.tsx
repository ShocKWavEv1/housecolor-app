import { Box, Heading } from "@chakra-ui/react";
import { HeroTextProps } from "./model";

const HeroText: React.FC<HeroTextProps> = ({ textMask }) => {
  return (
    <Box
      as="section"
      w="100%"
      h="100%"
      position="absolute"
      bg="rgba(0,0,0,.2)"
      top={0}
      bottom={0}
      left={0}
      right={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      zIndex={2}
    >
      <Box
        w="100%"
        h="100%"
        p={[
          "90px 20px 20px 20px",
          "90px 20px 20px 20px",
          "90px 30px 20px 30px",
          "90px 50px 90px 50px",
          "90px 80px 90px 80px",
          "90px 120px 90px 120px",
        ]}
      >
        <Box
          w="100%"
          h="100%"
          display="flex"
          alignItems={[
            "flex-start",
            "flex-start",
            "flex-start",
            "center",
            "center",
            "center",
          ]}
          justifyContent={[
            "flex-end",
            "flex-end",
            "flex-end",
            "center",
            "center",
            "center",
          ]}
          flexDirection="column"
          textAlign="left"
          pt={["0px", "0px", "0px", "10px", "0px", "10px"]}
        >
          <Heading
            variant={[
              "MAINXSHATTONREGULAR",
              "MAINSMHATTONREGULAR",
              "MAINMDHATTONREGULAR",
              "MAINLGHATTONREGULAR",
              "MAINXLHATTONREGULAR",
              "MAINXXLHATTONREGULAR",
            ]}
            color="egg.500"
          >
            We are a creative post production studio obsessed with color
            grading, collective creativity and excellence
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroText;
