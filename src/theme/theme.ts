import { extendTheme } from "@chakra-ui/react";
import colorsToken from "./colors/colors.json";
import { getColors } from "./colors/getColors";
import { HeadingTheme as Heading } from "./designSystem/headingTheme/headingTheme";
import { TextTheme as Text } from "./designSystem/textTheme/textTheme";
import { ButtonTheme as Button } from "./designSystem/buttonTheme/buttonTheme";

// HOUSECOLOR COMPONENTS

const colors = getColors({ colors: colorsToken.color });

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors,
  components: {
    Button,
    Heading,
    Text,
  },
  styles: {
    global: {
      body: {
        bg: "black",
        width: "100%",
      },
    },
  },
});

export default theme;
