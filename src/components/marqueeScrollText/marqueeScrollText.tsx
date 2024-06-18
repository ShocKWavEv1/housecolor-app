"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { MarqueeScrollTextModel } from "./model";
import { Box, Heading } from "@chakra-ui/react";

const MarqueeScrollText: React.FC<MarqueeScrollTextModel> = ({
  marqueeText,
}) => {
  const container: any = useRef();
  const { scrollYProgress }: { scrollYProgress: any } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <Box overflow="hidden">
      <Box ref={container}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ overflow: "hidden" }}
        >
          {marqueeText.map((marquee: any, index: number) => {
            return (
              <Slide
                src={""}
                direction={marquee.direction}
                left={marquee.position}
                progress={scrollYProgress}
                key={marquee.text}
                text={marquee.text}
                hasStroke={marquee.hasStroke}
              />
            );
          })}
        </motion.div>
      </Box>
    </Box>
  );
};

export default MarqueeScrollText;

const Slide = (props: any) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{
        width: "100%",
        x: translateX,
        left: props.left,
        position: "relative",
        display: "flex",
        whiteSpace: "nowrap",
      }}
      className={"slider-manifesto-club"}
    >
      <Phrase src={""} text={props.text} hasStroke={props.hasStroke} />
      <Phrase src={""} text={props.text} hasStroke={props.hasStroke} />
      <Phrase src={""} text={props.text} hasStroke={props.hasStroke} />
    </motion.div>
  );
};

const Phrase = ({
  src,
  text,
  hasStroke,
}: {
  src: string;
  text: string;
  hasStroke: boolean;
}) => {
  return (
    <Box
      px={5}
      gap={5}
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Heading
        variant="H7HATTONREGULAR"
        fontSize={["26vw", "18vw", "18vw", "18vw", "18vw", "18vw"]}
        color="egg.400"
        className={hasStroke ? "text-slider-manifesto-club" : ""}
      >
        {text}
      </Heading>
    </Box>
  );
};
