import React, { Suspense } from "react";
import getCrewData from "../api/getCrewData";
import TeamPage from "@/views/team/team";

export default async function Work() {
  const contentData = await getCrewData();

  return (
    <div>
      <Suspense fallback="loading...">
        <TeamPage contentData={contentData} />
      </Suspense>
    </div>
  );
}
