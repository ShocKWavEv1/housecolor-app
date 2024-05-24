import { Box } from "@chakra-ui/react";
import { FooterProps } from "./model";
import { phrases, socialMedia } from "./constants";
import ReadyWork from "./readyWork/readyWork";
import SectionHeader from "../sectionHeader/sectionHeader";

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box
      as="section"
      data-bgcolor="#000"
      data-textcolor="#FEFCED"
      w="100%"
      h="auto"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="column"
      p={[
        "0px 20px 0px 20px",
        "60px 30px 0px 30px",
        "120px 60px 0px 60px",
        "120px 80px 0px 80px",
        "120px 80px 0px 80px",
      ]}
      className="bg-noise-manifesto"
    >
      <SectionHeader
        section="contact"
        title={"We would love to hear from you"}
        brackets={"[ keep in touch ]"}
        hasButton={false}
        isDark={true}
      />
      <ReadyWork text={phrases} socialMedia={socialMedia} />
    </Box>
  );
};

export default Footer;
