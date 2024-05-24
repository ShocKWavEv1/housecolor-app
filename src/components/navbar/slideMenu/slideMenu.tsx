import { motion } from "framer-motion";
import { SlideMenuProps } from "./model";
import MenuFooter from "./menuFooter/menuFooter";
import MenuBody from "./menuBody/menuBody";
import { useState } from "react";

const SlideMenu: React.FC<SlideMenuProps> = ({ links, isOpen, setOpen }) => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="full-screen-menu"
      onClick={() => setOpen()}
    >
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="full-screen-submenu"
      >
        <MenuBody
          links={links}
          selectedLink={selectedLink}
          setSelectedLink={setSelectedLink}
          setOpen={() => setOpen()}
        />
        <MenuFooter />
      </motion.div>
    </motion.div>
  );
};

export default SlideMenu;
