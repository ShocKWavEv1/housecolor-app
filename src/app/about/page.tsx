import React, { Suspense } from "react";
import getWorkData from "../api/getWorkData";
import AboutPage from "@/views/about/about";

export default async function About() {
  const contentData = await getWorkData();

  return (
    <div>
      <Suspense fallback="loading...">
        <AboutPage contentData={contentData} />
      </Suspense>
    </div>
  );
}
