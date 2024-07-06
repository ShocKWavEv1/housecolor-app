"use server";
import { NextResponse } from "next/server";
import { ApiFailedError } from "@/app/lib/exceptions/exceptions";
import { configSanity, handleImagesUrl } from "@/app/lib/sanity/sanity";

export async function GET() {
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
      console.log(`Fetching data from ${url}`);
      const response = await fetch(url, {
        cache: "no-cache",
      });
      if (!response.ok) {
        console.error(`Error fetching data: ${response.statusText}`);
        throw new ApiFailedError();
      }
      return response.json();
    };

    const [result] = await Promise.all([fetchData(urls.projects)]);

    const processData = async (items: any) => {
      return Promise.all(
        items.map(async (item: any) => {
          const mainImage = handleImagesUrl(item.mainImage.asset._ref);
          const base64 =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAECAIAAAArjXluAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nGO4c+d2bUsPAzMzQ3vPRAYnJ6f+vh6GBw8efP/+HQCseA2/ytznCwAAAABJRU5ErkJggg==";
          item.mainImage = mainImage;
          item.base64 = base64;
          return item;
        })
      );
    };

    const projects = await processData(result.result);

    console.log("Data fetched successfully");
    return NextResponse.json({
      projects,
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
