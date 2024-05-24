import { scrollDiscoverText } from "@/app/lib/gsap/gsap";
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Discover = ({}) => {
  useEffect(() => {
    scrollDiscoverText();
  }, []);

  return (
    <Box w="100%" h="auto" pb={["30px", "30px", "50px", "50px", "50px"]}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ overflow: "hidden" }}
      >
        <Box className="slider">
          <Heading
            className="text-slider"
            variant={[
              "H1HATTONREGULAR",
              "H1HATTONREGULAR",
              "H1HATTONREGULAR",
              "JUMBOHATTONREGULAR",
              "JUMBOHATTONREGULAR",
            ]}
            color="egg.400"
            ml={["100px", "100px", "240px", "500px", "500px"]}
          >
            Discover ↔ our ↔ reel ↔ Discover ↔ our ↔ reel ↔ Discover ↔ our ↔
            reel ↔ Discover ↔ our ↔ reel ↔ Discover ↔ our ↔ reel ↔ Discover ↔
            our ↔ reel ↔ Discover ↔ our ↔ reel ↔ Discover ↔ our ↔ reel ↔
            Discover ↔ our ↔ reel ↔ Discover ↔ our ↔ reel ↔ Discover ↔ our ↔
            reel ↔ Discover ↔ our ↔ reel ↔
          </Heading>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Discover;
