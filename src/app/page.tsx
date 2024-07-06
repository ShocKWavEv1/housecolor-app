import React from "react";
import getHomeData from "./api/getHomeData";
import HomePage from "@/views/home/homePage";
import getReelData from "./api/getMainReel";

export default async function Home() {
  const contentData = await getHomeData();
  const contentReel = await getReelData();

  return (
    <div>
      <HomePage contentData={contentData} contentReel={contentReel} />
    </div>
  );
}

export const dynamic = "force-dynamic";
