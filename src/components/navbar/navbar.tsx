import { Box, Heading, Show } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import { NavbarProps } from "./model";
import circles from "../../../public/static/logo/three_circlces.svg";
import { navigation } from "./constants";
import Drawer from "./drawer/drawer";
import SlideMenu from "./slideMenu/slideMenu";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import SlideY from "@/app/lib/animations/slideY/slideY";
import Link from "next/link";

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState<any>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const [initialBG, setInitialBG] = useState<string>("transparent");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous && latest > 20) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest <= 200) {
      setInitialBG("transparent");
    } else {
      setInitialBG("#000");
    }
    if (isOpen) {
      if (latest > 30) {
        setIsOpen(false);
      }
    }
  });

  return (
    <Box id="navbar" w="100%" position="absolute" zIndex={3}>
      <SlideY direction={0} delay={0.25} duration={0}>
        <motion.div
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
          style={{
            width: "100%",
            height: "90px",
            backgroundColor: initialBG,
            position: "fixed",
            zIndex: 4,
            transition: "background-color 0.35s ease-in-out",
          }}
        >
          <Box
            w="100%"
            h="100%"
            display="grid"
            gridTemplateColumns={[
              "1fr 1fr",
              "1fr 1fr",
              "1fr 1fr",
              "1fr 1fr",
              "1fr 1fr",
            ]}
            p={["0px 20px", "0px 20px", "0px 30px", "0px 50px", "0px 50px"]}
            position="absolute"
            zIndex={4}
          >
            <Box
              w="100%"
              h="100%"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Link href="/">
                <Box
                  w="auto"
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  cursor="pointer"
                >
                  <Box
                    w={["68px", "74px", "64px", "64px", "64px"]}
                    pointerEvents="all"
                    cursor="pointer"
                    className="link"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-start"
                  >
                    <Image
                      width={80}
                      priority
                      src={circles}
                      alt="housecolor logo"
                    />
                  </Box>
                  <Show above="md">
                    <Heading
                      variant={[
                        "H10LIGHT",
                        "H10LIGHT",
                        "H10LIGHT",
                        "H10LIGHT",
                        "H10LIGHT",
                      ]}
                      color="egg.500"
                      pl="12px"
                    >
                      housecolor | studio
                    </Heading>
                  </Show>
                </Box>
              </Link>
            </Box>
            <Box
              w="100%"
              h="100%"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Drawer isOpen={isOpen} setOpen={() => setIsOpen(!isOpen)} />
            </Box>
          </Box>
        </motion.div>
      </SlideY>
      <AnimatePresence mode="wait">
        {isOpen && (
          <SlideMenu
            links={navigation}
            isOpen={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
          />
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Navbar;
