import React from "react";
import getCrewData from "../api/getCrewData";
import TeamPage from "@/views/team/team";

export default async function Work() {
  const contentData = await getCrewData();

  return (
    <div>
      <TeamPage contentData={contentData} />
    </div>
  );
}
