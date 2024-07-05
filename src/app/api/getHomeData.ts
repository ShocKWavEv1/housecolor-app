"use server";

import { ApiFailedError } from "@/app/lib/exceptions/exceptions";
import { configSanity, handleImagesUrl } from "../lib/sanity/sanity";
import getBase64 from "./getBase64";
import { noRevalidate, revalidate } from "../lib/revalidate/revalidate";

export default async function getHomeData(): Promise<any> {
  try {
    const { projectId, dataset } = configSanity;

    const queries = {
      projects: `*[ _type == "projects" ] | order(_createdAt asc)`,
      parallaxGrid: `*[ _type == "parallaxGrid" ] | order(_createdAt asc)`,
      crew: `*[ _type == "crew" ] | order(_createdAt asc)`,
    };

    const urls = {
      projects: `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${encodeURIComponent(
        queries.projects
      )}`,
      parallaxGrid: `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${encodeURIComponent(
        queries.parallaxGrid
      )}`,
      crew: `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${encodeURIComponent(
        queries.crew
      )}`,
    };

    const fetchData = async (url: string) => {
      const response = await fetch(url, {
        next: { revalidate: url === urls.projects ? revalidate : noRevalidate },
      });
      if (!response.ok) {
        throw new ApiFailedError();
      }
      return response.json();
    };

    const [result, resultParallax, resultCrew] = await Promise.all([
      fetchData(urls.projects),
      fetchData(urls.parallaxGrid),
      fetchData(urls.crew),
    ]);

    const processData = async (items: any) => {
      return Promise.all(
        items.map(async (item: any) => {
          const mainImage = handleImagesUrl(item.mainImage.asset._ref);
          const base64 = await getBase64(mainImage);
          item.mainImage = mainImage;
          item.base64 = base64;
          return item;
        })
      );
    };

    const projects = await processData(result.result);
    const parallaxGrid = await processData(resultParallax.result[0].parallax);
    const crew = await processData(resultCrew.result);

    return {
      projects,
      parallaxGrid,
      crew,
    };
  } catch (error) {
    throw new ApiFailedError();
  }
}
