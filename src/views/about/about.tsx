"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { AboutPageProps } from "./model";
import { WATERMELON_SHADER } from "@/app/lib/shaders/shaders";
import FullManifesto from "@/components/fullManifesto/fullManifesto";
import SectionHeader from "@/components/sectionHeader/sectionHeader";
import Footer from "@/components/footer/footer";
import DetailClub from "@/components/detailClub/detailClub";

const Hero = dynamic(() => import("@/components/hero/hero"));

const ThumbnailProject = dynamic(
  () => import("@/components/thumbnailProject/thumbnailProject")
);

const Reel = dynamic(() => import("@/components/reel/reel"));

const AboutPage: React.FC<AboutPageProps> = ({ contentData }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <Hero
        text={["We live in the details", "† the details club †"]}
        shader={WATERMELON_SHADER}
      />
      <FullManifesto />
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
          section="work"
          title="Every project is a chance to try something new with a fresh perspective"
          brackets={"[  browse our projects ]"}
          hasButton={false}
          isDark
        />
        <Box w="100%" mt={["40px", "50px", "80px", "80px", "80px"]}>
          {contentData?.projects.map((item: any, i: number) => {
            return <ThumbnailProject key={item.title} project={item} />;
          })}
        </Box>
      </Box>
      <DetailClub />
      <Reel videoRef={videoRef} />
      <Footer />
    </Box>
  );
};

export default AboutPage;
