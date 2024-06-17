import React from "react";
import getWorkData from "../api/getWorkData";
import AboutPage from "@/views/about/about";
import getReelData from "../api/getMainReel";

export default async function About() {
  const contentData = await getWorkData();
  const contentReel = await getReelData();

  return (
    <div>
      <AboutPage contentData={contentData} contentReel={contentReel} />
    </div>
  );
}
