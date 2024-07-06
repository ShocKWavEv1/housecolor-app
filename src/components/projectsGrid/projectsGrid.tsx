"use client";

import { Box } from "@chakra-ui/react";
import SectionHeader from "../sectionHeader/sectionHeader";
import ColumnImages from "./columnImages/columnImages";
import { useEffect, useState } from "react";
import { ProjectsGridProps } from "./model";
import { configSanity, handleImagesUrl } from "@/app/lib/sanity/sanity";

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projectList }) => {
  const [currentProjectList, setCurrentProjectList] = useState(projectList);
  const [projectFirstColumn, setProjectFirstColumn] = useState([]);
  const [projectSecondColumn, setProjectSecondColumn] = useState([]);

  const { projectId, dataset } = configSanity;

  const queries = {
    projects: `*[ _type == "projects" ] | order(_createdAt asc)`,
  };

  const urls = {
    projects: `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${encodeURIComponent(
      queries.projects
    )}`,
  };

  useEffect(() => {
    const arr: any = [];
    fetch(urls.projects)
      .then((response) => response.json())
      .then((data) => {
        const items = data.result;

        items.forEach(async (item: any) => {
          const mainImage = handleImagesUrl(item.mainImage.asset._ref);
          const base64 =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAECAIAAAArjXluAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nGO4c+d2bUsPAzMzQ3vPRAYnJ6f+vh6GBw8efP/+HQCseA2/ytznCwAAAABJRU5ErkJggg==";
          item.mainImage = mainImage;
          item.base64 = base64;
          arr.push(item);
          return item;
        });

        setCurrentProjectList(arr);
      });
  }, []);

  useEffect(() => {
    const firstColumn: any = [];
    const secondColumn: any = [];

    currentProjectList.forEach((element: any, index: any) => {
      if (index % 2 === 0) {
        firstColumn.push(element);
      } else {
        secondColumn.push(element);
      }
    });

    setProjectFirstColumn(firstColumn);
    setProjectSecondColumn(secondColumn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProjectList]);

  return (
    <Box
      as="section"
      data-bgcolor="#000"
      data-textcolor="#FEFCED"
      w="100%"
      h={"auto"}
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
      p={[
        "60px 20px 0px 20px",
        "60px 30px 0px 30px",
        "100px 60px 0px 60px",
        "100px 80px 0px 80px",
        "80px 80px 0px 80px",
      ]}
    >
      <SectionHeader
        section="projects"
        title="You are looking for a partner rather than a supplier"
        brackets={"[ working collaboratively towards a shared goal ]"}
        hasButton={false}
        isDark
      />
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <Box
          w={["100%", "100%", "100%", "70%", "70%"]}
          h="auto"
          mt="80px"
          p={["0px 20px", "0px 40px", "0px 40px", "0px 20px", "0px 20px"]}
        >
          <Box
            w="100%"
            display="flex"
            flexDirection={["column", "column", "row", "row", "row"]}
            gap="50px"
          >
            <ColumnImages
              project={projectFirstColumn}
              direction="left"
              classColumn="column-left-scroll"
              classImage="image-column-left"
            />
            <ColumnImages
              project={projectSecondColumn}
              direction="right"
              classColumn="column-right-scroll"
              classImage="image-column-right"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsGrid;
