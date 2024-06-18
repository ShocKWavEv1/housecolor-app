import { createClient } from "@sanity/client";

export const configSanity = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  token: process.env.SANITY_TOKEN,
};

export const configuredSanityClient = createClient(configSanity);

export const handleCategoriesToString = (categories: any) => {
  const categoriesArr: any = [];
  categories.forEach((cat: any, idx: number) => {
    categoriesArr.push(cat.category);
  });

  const formattedString = categoriesArr
    .map((word: any, idx: number) => {
      return word;
    })
    .join(" - ");

  return formattedString;
};

export const handleImagesUrl = (id: any) => {
  const imageRegex = /^image-/;
  const extensionRegex = /-(png|jpg|jpeg|webp)$/i;

  const cleanString = id.replace(imageRegex, "").replace(extensionRegex, "");

  const extension = id.match(/-(png|jpg|jpeg|webp)$/i)[0];

  const cleanExtension = extension.replace("-", "");

  return `https://cdn.sanity.io/images/${configSanity.projectId}/${configSanity.dataset}/${cleanString}.${cleanExtension}`;
};

export const handleVideoUrl = (id: string) => {
  const videoUrl = id.split("file-").join("").split("-mp4").join("");
  return `https://cdn.sanity.io/files/${configSanity.projectId}/${configSanity.dataset}/${videoUrl}.mp4`;
};
