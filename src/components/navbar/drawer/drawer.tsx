import { Box, Show } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { opacity } from "./animation";
import { DrawerButtonProps } from "./model";

const Drawer: React.FC<DrawerButtonProps> = ({ isOpen, setOpen }) => {
  return (
    <Box
      w="auto"
      h={["30px", "30px", "auto", "auto", "auto"]}
      p="2px 14px"
      bg="rgba(255,255,255,.1)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="25em"
      cursor="pointer"
      onClick={() => setOpen()}
    >
      <Box className={`burger ${isOpen ? "burgerActive" : ""}`}></Box>
      <Show above="md">
        <Box pl="10px" className="label" color="egg.400">
          <motion.p
            className="menu-text"
            variants={opacity}
            animate={!isOpen ? "open" : "closed"}
          >
            Menu
          </motion.p>
          <motion.p
            className="menu-text"
            variants={opacity}
            animate={isOpen ? "open" : "closed"}
          >
            Close
          </motion.p>
        </Box>
      </Show>
    </Box>
  );
};

export default Drawer;
