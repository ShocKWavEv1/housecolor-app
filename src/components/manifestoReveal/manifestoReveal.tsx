import { Box, Heading } from "@chakra-ui/react";
import { ManifestoRevealProps } from "./model";
import SectionHeader from "../sectionHeader/sectionHeader";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./manifestoReveal.module.scss";
import Image from "next/image";
import circles from "../../../public/static/logo/three_circlces.svg";

const ManifestoReveal: React.FC<ManifestoRevealProps> = () => {
  const paragraph =
    "We integrate, collaborate and challenge. We are digital natives embracing the creative freedom to produce solutions that connect, communicate, and inspire.";

  return (
    <Box
      as="section"
      data-bgcolor="#000"
      data-textcolor="#FEFCED"
      w="100%"
      h="auto"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
      p={[
        "60px 20px 60px 20px",
        "60px 30px 60px 30px",
        "100px 60px 60px 60px",
        "140px 80px 80px 80px",
        "140px 80px 80px 80px",
      ]}
      className="bg-noise-manifesto"
    >
      <SectionHeader
        section="manifesto"
        title="Meet our manifesto"
        brackets={"[ blur boundaries of difference ]"}
        hasButton={false}
        isDark
      />
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
          <Paragraph paragraph={paragraph} />
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
    </Box>
  );
};

export default ManifestoReveal;

function Paragraph({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.45", "start 0.0002"],
  });

  const words = paragraph.split(" ");
  return (
    <p ref={container} className={styles.paragraph}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: any;
}) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={styles.word}>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <Heading
        as="span"
        variant={[
          "H6HATTONREGULAR",
          "H5HATTONREGULAR",
          "H4HATTONREGULAR",
          "H4HATTONREGULAR",
          "H4HATTONREGULAR",
        ]}
        color="egg.400"
      >
        <span className={styles.shadow}>{children}</span>
      </Heading>

      <Heading
        as="span"
        variant={[
          "H6HATTONREGULAR",
          "H5HATTONREGULAR",
          "H4HATTONREGULAR",
          "H4HATTONREGULAR",
          "H4HATTONREGULAR",
        ]}
        color="egg.400"
      >
        <motion.span style={{ opacity: opacity }}>{children}</motion.span>
      </Heading>
    </span>
  );
};
