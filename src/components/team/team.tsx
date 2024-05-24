import { Box } from "@chakra-ui/react";
import SectionHeader from "../sectionHeader/sectionHeader";
import { title } from "./constants";
import { TeamProps } from "./model";
import TeamList from "./teamList/teamList";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

const Team: React.FC<TeamProps> = ({ crew }) => {
  const [crewFirstColumn, setCrewFirst] = useState<any>([]);
  const [crewSecondColumn, setCrewSecond] = useState<any>([]);

  const { width }: { width: any } = useWindowSize();

  useEffect(() => {
    const firstColumn: any = [];
    const secondColumn: any = [];

    crew.forEach((element: any, index: number) => {
      if (index % 2 === 0) {
        firstColumn.push(element);
      } else {
        secondColumn.push(element);
      }
    });

    setCrewFirst(firstColumn);
    setCrewSecond(secondColumn);
  }, [crew]);

  return (
    <Box
      as="section"
      data-bgcolor="#000"
      data-textcolor="#F9EBBB"
      w="100%"
      h="auto"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
      p={[
        "60px 20px 100px 20px",
        "60px 30px 100px 30px",
        "120px 60px 120px 60px",
        "120px 80px 120px 80px",
        "120px 80px 120px 80px",
      ]}
    >
      <SectionHeader
        section="team"
        title={title}
        brackets={"[ a safe space for independent spirits ]"}
        hasButton={false}
        isDark={true}
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
          p={["0px 20px", "0px 40px", "0px 40px", "0px 20px", "0px 20px"]}
          h="auto"
          mt="80px"
        >
          <Box
            w="100%"
            display="flex"
            flexDirection={["column", "column", "row", "row", "row"]}
            gap="50px"
          >
            <TeamList
              teamList={width > 569 ? crewFirstColumn : crew}
              direction="left"
              classColumn=""
              classImage="image-column-left"
            />
            <TeamList
              teamList={width > 569 ? crewSecondColumn : []}
              direction="right"
              classColumn=""
              classImage="image-column-right"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
