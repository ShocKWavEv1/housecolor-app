"use server";

import { NextResponse } from "next/server";
import { ApiFailedError } from "@/app/lib/exceptions/exceptions";
import {
  configSanity,
  handleImagesUrl,
  handleVideoUrl,
} from "@/app/lib/sanity/sanity";
import { revalidate } from "@/app/lib/revalidate/revalidate";

export async function GET(
  request: Request,
  { params }: { params: { projectId: string } }
) {
  const { projectId: projectIdContext } = params;

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
      const response = await fetch(url, {
        cache: "no-cache",
      });
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
          const mainImageBase64 =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAECAIAAAArjXluAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nGO4c+d2bUsPAzMzQ3vPRAYnJ6f+vh6GBw8efP/+HQCseA2/ytznCwAAAABJRU5ErkJggg==";
          const videoFileURL = handleVideoUrl(item.videoFile.asset._ref);
          const videoFullURL = handleVideoUrl(item.videoFull.asset._ref);

          if (item.sections) {
            item.sections = await Promise.all(
              item.sections.map(async (section: any) => {
                if (section.images) {
                  section.images = await Promise.all(
                    section.images.map(async (sectionImage: any) => {
                      const imageURL = handleImagesUrl(sectionImage.asset._ref);
                      const imageBase64 =
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAECAIAAAArjXluAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nGO4c+d2bUsPAzMzQ3vPRAYnJ6f+vh6GBw8efP/+HQCseA2/ytznCwAAAABJRU5ErkJggg==";
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

    if (!projectDetail.length) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({
      projectDetail: projectDetail[0],
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
