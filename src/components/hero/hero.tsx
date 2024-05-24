import { Box } from "@chakra-ui/react";
import { HeroProps } from "./model";
import { useOrientation } from "@uidotdev/usehooks";
import PageHeroSection from "../pageHeroSection/pageHeroSection";
import { getSecondaryViewPort } from "@/app/lib/shaders/shaders";
import SketchSecondary from "../secondarySketch/secondarySketch";

const Hero: React.FC<HeroProps> = ({ text, shader }) => {
  const { type } = useOrientation();
  return (
    <Box
      w="100%"
      h={getSecondaryViewPort(type)}
      bg="black"
      display="flex"
      alignItems="flex-start"
      position="relative"
    >
      <SketchSecondary orientation={type} shaderColor={shader} />
      <PageHeroSection text={text} />
    </Box>
  );
};

export default Hero;
