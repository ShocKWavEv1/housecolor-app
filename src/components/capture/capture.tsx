import { Box } from "@chakra-ui/react";
import SectionHeader from "../sectionHeader/sectionHeader";
import { services, title } from "./constants";
import ListCapture from "./listCapture/listCapture";
import { CaptureProps } from "./model";

const Capture: React.FC<CaptureProps> = ({}) => {
  return (
    <Box
      as="section"
      data-bgcolor="#000"
      data-textcolor="#FEFCED"
      w="100%"
      h="auto"
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
      p={[
        "60px 20px 60px 20px",
        "60px 30px 60px 30px",
        "120px 60px 120px 60px",
        "120px 80px 120px 80px",
        "120px 80px 120px 80px",
      ]}
    >
      <SectionHeader
        section="capture"
        title={title}
        brackets={"[ we are design - driven ]"}
        hasButton={false}
        isDark={true}
      />
      <ListCapture services={services} />
    </Box>
  );
};

export default Capture;
