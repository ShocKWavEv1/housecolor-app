import SectionHeader from "@/components/sectionHeader/sectionHeader";
import { Box } from "@chakra-ui/react";
import { SynopsisProps } from "./model";

const Synopsis: React.FC<SynopsisProps> = ({ synopsis }) => {
  const descriptions = synopsis.map((item: any) => item.description);

  return (
    <Box
      w="100%"
      p={[
        "60px 20px 60px 20px",
        "80px 30px 80px 30px",
        "120px 60px 120px 60px",
        "120px 80px 120px 80px",
        "120px 80px 120px 80px",
      ]}
    >
      <SectionHeader
        section="synopsis"
        title="We choose a different → starting point"
        isDark
        hasButton={false}
        description={descriptions}
        isLoaded={false}
      />
    </Box>
  );
};

export default Synopsis;
