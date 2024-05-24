import { ApiFailedError } from "@/app/lib/exceptions/exceptions";
import { configSanity, handleImagesUrl } from "../lib/sanity/sanity";
import getBase64 from "./getBase64";

export default async function getWorkData(): Promise<any> {
  try {
    const { projectId, dataset } = configSanity;

    const queries = {
      projects: `*[ _type == "projects" ] | order(_createdAt asc)`,
    };

    const urls = {
      projects: `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${encodeURIComponent(
        queries.projects
      )}`,
    };

    const fetchData = async (url: string) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new ApiFailedError();
      }
      return response.json();
    };

    const [result] = await Promise.all([fetchData(urls.projects)]);

    const processData = async (items: any) => {
      return Promise.all(
        items.map(async (item: any) => {
          const mainImage = handleImagesUrl(item.mainImage.asset._ref);
          const shortImage = handleImagesUrl(item.shortImage.asset._ref);
          const base64 = await getBase64(mainImage);
          const base64Short = await getBase64(shortImage);
          item.mainImage = mainImage;
          item.base64 = base64;
          item.shortImage = shortImage;
          item.base64Short = base64Short;
          return item;
        })
      );
    };

    const projects = await processData(result.result);

    return {
      projects,
    };
  } catch (error) {
    throw new ApiFailedError();
  }
}
