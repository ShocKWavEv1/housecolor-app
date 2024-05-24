import { Box, Show } from "@chakra-ui/react";
import { NoiseGradientProps } from "./model";
import { extraDescription } from "./constants";
import HeroFooter from "./heroFooter/heroFooter";
import HeroText from "./heroText/heroText";
import { useOrientation } from "@uidotdev/usehooks";
import { PARIS_SHADER, getMainViewPort } from "@/app/lib/shaders/shaders";
import SketchMain from "../sketch/sketch";

const NoiseGradient: React.FC<NoiseGradientProps> = ({}) => {
  const { type } = useOrientation();
  return (
    <Box
      bg="black"
      as="section"
      w="100%"
      h={getMainViewPort(type)}
      position="relative"
    >
      <SketchMain orientation={type} shaderColor={PARIS_SHADER} />
      <HeroText textMask={type} />
      <Show above="lg">
        <HeroFooter options={extraDescription} />
      </Show>
    </Box>
  );
};

export default NoiseGradient;
