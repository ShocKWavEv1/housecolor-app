import { Box } from "@chakra-ui/react";
import { SummaryProps } from "./model";
import Steps from "./steps/steps";

const Summary: React.FC<SummaryProps> = ({ sections }) => {
  return (
    <Box w="100%" h="auto">
      <Steps steps={sections} />
    </Box>
  );
};

export default Summary;
