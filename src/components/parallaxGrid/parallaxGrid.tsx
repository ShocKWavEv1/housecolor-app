"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./parallaxGrid.module.scss";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { ParallaxGridProps } from "./model";
import { Box } from "@chakra-ui/react";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { useWindowSize } from "@uidotdev/usehooks";

const ParallaxGrid: React.FC<ParallaxGridProps> = ({ parallaxGrid }) => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const isTouch = useIsTouchDevice();
  const { width }: { width: any } = useWindowSize();

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <Box className={styles.main}>
      {isTouch && width <= 564 ? (
        <MobileColumn parallaxGrid={parallaxGrid} />
      ) : (
        <Box ref={gallery} className={styles.gallery}>
          <Column
            images={[parallaxGrid[0], parallaxGrid[1], parallaxGrid[2]]}
            y={y}
          />
          <Column
            images={[parallaxGrid[3], parallaxGrid[4], parallaxGrid[5]]}
            y={y2}
          />
          <Column
            images={[parallaxGrid[6], parallaxGrid[7], parallaxGrid[8]]}
            y={y3}
          />
          <Column
            images={[parallaxGrid[9], parallaxGrid[10], parallaxGrid[11]]}
            y={y4}
          />
        </Box>
      )}
    </Box>
  );
};

export default ParallaxGrid;

const Column = ({ images, y }: { images: any; y: any }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src: any, i: any) => {
        return (
          <div key={src?.base64} className={styles.imageContainer}>
            <Image
              src={src?.mainImage}
              alt="image"
              placeholder="blur"
              blurDataURL={src?.base64}
              fill
            />
          </div>
        );
      })}
    </motion.div>
  );
};

const MobileColumn = ({ parallaxGrid }: { parallaxGrid: any }) => {
  const mobileParallaxGrid = [{ number: 9 }, { number: 3 }];

  return (
    <Box
      w="100%"
      h="170vh"
      display="flex"
      padding="2vw"
      gap="2vw"
      overflow="hidden"
      flexDirection="row"
    >
      {mobileParallaxGrid.map((item, index) => {
        return (
          <Box
            key={item.number}
            w="25%"
            minW="400px"
            gap="2vw"
            display="flex"
            flexDirection="column"
          >
            {Array.from({ length: 3 }, (_, index) => (
              <Box h="auto" position="relative" key={index + item.number}>
                <Image
                  src={parallaxGrid[item.number + index]?.mainImage}
                  alt="image"
                  placeholder="blur"
                  width={400}
                  height={400}
                  blurDataURL={parallaxGrid[index]?.base64}
                />
                <Box
                  w="100%"
                  h="100%"
                  position="absolute"
                  top={0}
                  bg="rgba(0,0,0,.45)"
                />
              </Box>
            ))}
          </Box>
        );
      })}
    </Box>
  );
};
