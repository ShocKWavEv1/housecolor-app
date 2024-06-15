"use server";

import { ApiFailedError } from "@/app/lib/exceptions/exceptions";
import { configSanity, handleImagesUrl } from "../lib/sanity/sanity";
import getBase64 from "./getBase64";

export default async function getCrewData(): Promise<any> {
  try {
    const { projectId, dataset } = configSanity;

    const queries = {
      crew: `*[ _type == "crew" ] | order(_createdAt asc)`,
    };

    const urls = {
      crew: `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${encodeURIComponent(
        queries.crew
      )}`,
    };

    const fetchData = async (url: string) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new ApiFailedError();
      }
      return response.json();
    };

    const [resultCrew] = await Promise.all([fetchData(urls.crew)]);

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

    const crew = await processData(resultCrew.result);

    return {
      crew,
    };
  } catch (error) {
    throw new ApiFailedError();
  }
}
