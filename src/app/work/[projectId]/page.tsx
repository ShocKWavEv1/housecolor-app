import React, { Suspense } from "react";
import getProjectDetailData from "@/app/api/getProjectDetail";
import ProjectDetail from "@/views/projectDetail/projectDetail";

export default async function WorkDetail({ params }: any) {
  const contentData = await getProjectDetailData(params.projectId);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectDetail contentData={contentData} />
      </Suspense>
    </div>
  );
}
