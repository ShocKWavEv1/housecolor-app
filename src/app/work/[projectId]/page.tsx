import React from "react";
import getProjectDetailData from "@/app/api/getProjectDetail";
import ProjectDetail from "@/views/projectDetail/projectDetail";

export default async function WorkDetail({ params }: any) {
  const contentData = await getProjectDetailData(params.projectId);

  return (
    <div>
      <ProjectDetail contentData={contentData} />
    </div>
  );
}
