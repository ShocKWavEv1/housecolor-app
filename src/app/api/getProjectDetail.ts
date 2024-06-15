"use server";

import { ApiFailedError } from "@/app/lib/exceptions/exceptions";
import {
  configSanity,
  handleImagesUrl,
  handleVideoUrl,
} from "../lib/sanity/sanity";
import getBase64 from "./getBase64";

export default async function getProjectDetailData(
  projectIdContext: string
): Promise<any> {
  try {
    const { projectId, dataset } = configSanity;

    const queries = {
      projectDetail: `*[ _type == "projectDetail" && slug.current == "${projectIdContext}" ]`,
    };

    const urls = {
      projectDetail: `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${encodeURIComponent(
        queries.projectDetail
      )}`,
    };

    const fetchData = async (url: string) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new ApiFailedError();
      }
      return response.json();
    };

    const [result] = await Promise.all([fetchData(urls.projectDetail)]);

    const processData = async (items: any) => {
      return Promise.all(
        items.map(async (item: any) => {
          const mainImageURL = handleImagesUrl(item.mainImage.asset._ref);
          const mainImageBase64 = await getBase64(mainImageURL);
          const videoFileURL = handleVideoUrl(item.videoFile.asset._ref);
          const videoFullURL = handleVideoUrl(item.videoFull.asset._ref);
          if (item.sections) {
            item.sections = await Promise.all(
              item.sections.map(async (section: any) => {
                if (section.images) {
                  section.images = await Promise.all(
                    section.images.map(async (sectionImage: any) => {
                      const imageURL = handleImagesUrl(sectionImage.asset._ref);
                      const imageBase64 = await getBase64(imageURL);
                      return { url: imageURL, base64: imageBase64 };
                    })
                  );
                }
                return section;
              })
            );
          }

          return {
            ...item,
            mainImage: mainImageURL,
            base64: mainImageBase64,
            videoFile: videoFileURL,
            videoFull: videoFullURL,
          };
        })
      );
    };

    const projectDetail = await processData(result.result);

    return {
      projectDetail: projectDetail[0],
    };
  } catch (error) {
    throw new ApiFailedError();
  }
}
