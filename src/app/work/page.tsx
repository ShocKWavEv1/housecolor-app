import React from "react";
import getWorkData from "../api/getWorkData";
import WorkPage from "@/views/work/workPage";

export default async function Work() {
  const contentData = await getWorkData();

  return (
    <div>
      <WorkPage contentData={contentData} />
    </div>
  );
}
