import React from "react";
import getHomeData from "./api/getHomeData";
import HomePage from "@/views/home/homePage";

export default async function Home() {
  const contentData = await getHomeData();

  return (
    <div>
      <HomePage contentData={contentData} />
    </div>
  );
}
