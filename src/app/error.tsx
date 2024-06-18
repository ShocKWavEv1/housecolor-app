"use client";

import { Box, Button, Heading, Text } from "@chakra-ui/react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<Props> = ({ error, reset }) => {
  return (
    <Box
      w="100%"
      h="100svh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box w="90%" textAlign="center">
        <Heading variant="H7HATTONREGULAR" color="egg.400" textAlign="center">
          {error.message}
        </Heading>
      </Box>
      <Box mt="30px">
        <Button colorScheme="primary" size="xs" onClick={reset}>
          <Text variant="XSREGULAR">Try again</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
