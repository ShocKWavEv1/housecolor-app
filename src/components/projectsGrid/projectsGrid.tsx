import { Box } from "@chakra-ui/react";
import SectionHeader from "../sectionHeader/sectionHeader";
import ColumnImages from "./columnImages/columnImages";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { ProjectsGridProps } from "./model";

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projectList }) => {
  const { width } = useWindowSize();

  const [projectFirstColumn, setProjectFirst] = useState([]);
  const [projectSecondColumn, setProjectSecond] = useState([]);

  useEffect(() => {
    const firstColumn: any = [];
    const secondColumn: any = [];

    projectList.forEach((element: any, index: any) => {
      if (index % 2 === 0) {
        firstColumn.push(element);
      } else {
        secondColumn.push(element);
      }
    });

    setProjectFirst(firstColumn);
    setProjectSecond(secondColumn);
  }, []);

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
