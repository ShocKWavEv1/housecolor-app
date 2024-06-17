import React from "react";
import ServicesPage from "@/views/services/services";
import getReelData from "../api/getMainReel";

export default async function About() {
  const contentReel = await getReelData();
  return (
    <div>
      <ServicesPage contentReel={contentReel} />
    </div>
  );
}
