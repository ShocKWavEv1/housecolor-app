import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ManifestoScrollProps } from "./model";
import { Box, Heading } from "@chakra-ui/react";
import circles from "../../../../public/static/logo/three_circlces.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const ManifestoScroll: React.FC<ManifestoScrollProps> = () => {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef: any = useRef<any>();
    lettersRef.current = [];
    return [lettersRef, (ref: any) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);

  const text =
    "We integrate, collaborate and challenge. We are digital natives embracing the creative freedom to produce solutions that connect, communicate, and inspire. ";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 25%",
      },
      color: "#F9EBBB",
      duration: 1,
      stagger: 0.09,
    });
    return () => {
      anim.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
    >
      <Box
        w={["100%", "100%", "100%", "80%", "80%"]}
        h="auto"
        mt="80px"
        p={["0px 0px", "0px 0px", "0px 0px", "0px 20px", "0px 20px"]}
      >
        <div className="reveal">
          <div style={{ width: "100%" }} ref={triggerRef}>
            {text.split("").map((letter, index) => (
              <Heading
                as="span"
                key={index}
                variant={[
                  "H6HATTONREGULAR",
                  "H5HATTONREGULAR",
                  "H4HATTONREGULAR",
                  "H4HATTONREGULAR",
                  "H4HATTONREGULAR",
                ]}
                color="egg.400"
              >
                <span
                  className="reveal-text"
                  ref={setlettersRef}
                  color="egg.400"
                >
                  {letter}
                </span>
              </Heading>
            ))}
          </div>
        </div>
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          pr="20px"
          pt="60px"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1,
              delay: 0.25,
            }}
          >
            <Box
              w={["60px", "60px", "80px", "80px", "80px"]}
              pointerEvents="all"
            >
              <Image
                style={{ width: "100%" }}
                priority
                src={circles}
                alt="housecolor logo"
              />
            </Box>
          </motion.div>
        </Box>
        <Box w="100%" h="1px" bg="egg.100" mt="60px"></Box>
      </Box>
    </Box>
  );
};

export default ManifestoScroll;
