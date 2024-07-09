import { Box } from "@chakra-ui/react";
import { MoreProjectsProps } from "./model";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./moreProjects.module.css";
import gsap from "gsap";
import Image from "next/image";
import SectionHeader from "@/components/sectionHeader/sectionHeader";
import ThumbnailProject from "@/components/thumbnailProject/thumbnailProject";

const MoreProjects: React.FC<MoreProjectsProps> = ({ currentProjectSlug }) => {
  return (
    <Box
      w="100%"
      h="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      gap="20px"
    >
      <Box
        w="100%"
        p={[
          "60px 20px 40px 20px",
          "60px 30px 100px 30px",
          "120px 60px 40px 60px",
          "120px 80px 40px 80px",
          "120px 80px 40px 80px",
        ]}
      >
        <SectionHeader
          section="projects"
          title="Check out our latest projects"
          brackets={"[  browse our projects ]"}
          hasButton={false}
          isDark
        />
        <Box w="100%" mt={["40px", "50px", "80px", "80px", "80px"]}>
          <ThumbnailProject
            projects={[]}
            currentProjectSlug={currentProjectSlug}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MoreProjects;

const ModalProjectImage = ({ modal }: any) => {
  const { active, project } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  return (
    <motion.div
      ref={modalContainer}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className={styles.modalContainer}
    >
      <Box w="350px" h="auto" bg="black">
        <Box width="100%" height={!active ? "400px" : "100%"}>
          {active && (
            <Image
              src={project.mainImage ? project?.mainImage : ""}
              width={350}
              height={400}
              alt={project?.name}
              style={{ objectFit: "cover" }}
            />
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

/*          {!isLoading &&
            moreProjects.map((project: any, index: number) => {
              return (
                <Link
                  key={project?.name}
                  href={`/work/${project?.slug?.current}`}
                  prefetch
                  style={{ width: "100%" }}
                >
                  <Box
                    w="100%"
                    display="flex"
                    flexDirection="row"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    cursor="pointer"
                    position="relative"
                    className="image-gallery"
                    onMouseEnter={() =>
                      !isTouchableDevice &&
                      setModal({ active: true, index, project })
                    }
                    onMouseLeave={() =>
                      !isTouchableDevice &&
                      setModal({ active: false, index, project: {} })
                    }
                  >
                    <Text
                      variant="XLREGULAR"
                      fontSize={["5vw", "8vw", "4.5vw", "4.2vw", "3vw"]}
                      color="egg.400"
                      textAlign="left"
                    >
                      {project?.name}
                    </Text>
                  </Box>
                </Link>
              );
            })}*/
