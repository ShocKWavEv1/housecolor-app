import { Box, Button, Text } from "@chakra-ui/react";
import { clients } from "./constants";
import { ClientsProps } from "./model";
import { motion } from "framer-motion";
import TextMaskY from "@/app/lib/animations/textY/textY";
import Link from "next/link";

const Clients: React.FC<ClientsProps> = ({}) => {
  return (
    <Box
      as="section"
      data-bgcolor="#000"
      data-textcolor="#FEFCED"
      w="100%"
      h={["90vh", "90vh", "80vh", "80vh", "80vh"]}
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
      className="bg-noise"
    >
      <Box
        w="100%"
        h="auto"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        p="120px 40px"
        position="relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 1,
          }}
        >
          <Text variant="SMREGULAR" color="egg.400">
            They trust us
          </Text>
        </motion.div>
        <Box
          w={["auto", "auto", "680px", "680px", "680px"]}
          pt="50px"
          textAlign="center"
        >
          <TextMaskY
            text={clients}
            variant={[
              "H8HATTONREGULAR",
              "H7HATTONREGULAR",
              "H7HATTONREGULAR",
              "H7HATTONREGULAR",
              "H7HATTONREGULAR",
              "H7HATTONREGULAR",
            ]}
            className=""
            delay={0.25}
            isFooter={false}
            once
          />
        </Box>
        <Box pt="50px">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
            }}
          >
            <Link href="/work" prefetch>
              <Button size="sm" variant="solid" colorScheme="primary">
                <Text variant="SMREGULAR">Discover more projects</Text>
              </Button>
            </Link>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Clients;
