"use client";

import { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";
import { WorkPageProps } from "./model";
import { MINT_SHADER } from "@/app/lib/shaders/shaders";
import SectionHeader from "@/components/sectionHeader/sectionHeader";
import Footer from "@/components/footer/footer";

const Hero = dynamic(() => import("@/components/hero/hero"));

const ThumbnailProject = dynamic(
  () => import("@/components/thumbnailProject/thumbnailProject")
);

const WorkPage: React.FC<WorkPageProps> = ({ contentData }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box w="100%" h="auto" overflowX="hidden">
      <Hero
        shader={MINT_SHADER}
        text={["We choose a different →", "starting point."]}
      />
      <Box
        w="100%"
        p={[
          "80px 20px 40px 20px",
          "80px 30px 100px 30px",
          "100px 60px 120px 60px",
          "100px 80px 120px 80px",
          "100px 80px 120px 80px",
        ]}
      >
        <SectionHeader
          section="work"
          title="Every project is a chance to try something new with a fresh perspective"
          brackets={"[  browse our projects ]"}
          hasButton={false}
          isDark
        />
        <Suspense fallback={"laoding..."}>
          <Box w="100%" pt={["40px", "50px", "80px", "80px", "80px"]}>
            {contentData?.projects.map((item: any, i: number) => {
              return (
                <ThumbnailProject key={item.name} project={item} index={i} />
              );
            })}
          </Box>
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
};

export default WorkPage;
