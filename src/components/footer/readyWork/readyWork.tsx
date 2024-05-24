import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReadyWorkProps } from "./model";
import details from "../../../../public/static/bg/details.svg";
import FooterMedia from "../footerMedia/footerMedia";
import TextMaskY from "@/app/lib/animations/textY/textY";

const ReadyWork: React.FC<ReadyWorkProps> = ({ text, socialMedia }) => {
  const handleClick = async () => {
    return;
    /*try {
      const response = await fetch("/api/send", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error, e.g., show an error message to the user
    }*/
  };

  return (
    <Box w="100%">
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <Box
          w={["100%", "100%", "100%", "100%", "80%"]}
          h="auto"
          p={["0px", "0px", "0px", "0px 20px", "0px 20px"]}
          mt="80px"
          position="relative"
        >
          <TextMaskY
            text={["Ready to"]}
            variant={[
              "H6BOLDER",
              "H6BOLDER",
              "H4BOLDER",
              "H3BOLDER",
              "H2BOLDER",
            ]}
            className={"stroke-text"}
            delay={0.25}
            isFooter
            once={true}
          />
          <Box onClick={handleClick}>
            <TextMaskY
              text={["work with us"]}
              variant={[
                "H6BOLDER",
                "H6BOLDER",
                "H4BOLDER",
                "H3BOLDER",
                "H2BOLDER",
              ]}
              className={"underline"}
              delay={0.25}
              isFooter
              once={true}
            />
          </Box>
          <Box
            position="absolute"
            display={["none", "none", "none", "block", "block"]}
            top={["-50%", "-50%", "-50%", "-50%", "-50%"]}
            left={["75%", "75%", "77%", "70%", "75%"]}
            right={0}
            bottom={0}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
                delay: 0.35,
              }}
            >
              <Box
                w={["50px", "50px", "160px", "160px", "350px"]}
                pointerEvents="all"
              >
                <Image
                  priority
                  src={details}
                  alt="housecolor logo"
                  style={{ opacity: 0.25 }}
                  className="rotating"
                />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
      <FooterMedia socialMedia={socialMedia} />
    </Box>
  );
};

export default ReadyWork;
