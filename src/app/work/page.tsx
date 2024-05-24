import React, { Suspense } from "react";
import getWorkData from "../api/getWorkData";
import WorkPage from "@/views/work/workPage";

export default async function Work() {
  const contentData = await getWorkData();

  return (
    <div>
      <Suspense fallback="loading...">
        <WorkPage contentData={contentData} />
      </Suspense>
    </div>
  );
}
