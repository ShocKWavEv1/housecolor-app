"use server";

import { ApiFailedError } from "@/app/lib/exceptions/exceptions";
import { configSanity, handleVideoUrl } from "../lib/sanity/sanity";

export default async function getReelData(): Promise<any> {
  try {
    const { projectId, dataset } = configSanity;

    const queries = {
      projects: `*[ _type == "projects" ] | order(_createdAt asc)`,
      parallaxGrid: `*[ _type == "parallaxGrid" ] | order(_createdAt asc)`,
      crew: `*[ _type == "crew" ] | order(_createdAt asc)`,
      mainReel: `*[ _type == "mainReel" ] | order(_createdAt asc)`,
    };

    const urls = {
      mainReel: `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${encodeURIComponent(
        queries.mainReel
      )}`,
    };

    const fetchData = async (url: string) => {
      const response = await fetch(url, {
        next: { revalidate: 10 },
      });
      if (!response.ok) {
        throw new ApiFailedError();
      }
      return response.json();
    };

    const [resultMainReel] = await Promise.all([fetchData(urls.mainReel)]);

    const processVideo = async (items: any) => {
      return Promise.all(
        items.map(async (item: any) => {
          const videoFileURL = handleVideoUrl(item.videoFile.asset._ref);
          const videoFullURL = handleVideoUrl(item.videoFull.asset._ref);
          return {
            videoFile: videoFileURL,
            videoFull: videoFullURL,
          };
        })
      );
    };

    const mainReel = await processVideo(resultMainReel.result);

    return {
      mainReel,
    };
  } catch (error) {
    throw new ApiFailedError();
  }
}
