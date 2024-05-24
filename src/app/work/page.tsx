import React, { Suspense } from "react";
import HomePage from "@/views/home/homePage";
import getHomeData from "../api/getHomeData";
import { Box } from "@chakra-ui/react";

export default async function Home() {
  const contentData = await getHomeData();

  return (
    <div>
      <Suspense fallback="loading...">
        <Box>Hi Work</Box>
      </Suspense>
    </div>
  );
}
