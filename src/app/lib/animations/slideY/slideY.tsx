import { motion } from "framer-motion";
import { SlideYProps } from "./model";

const SlideY: React.FC<SlideYProps> = ({
  direction,
  delay,
  duration,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: duration,
        delay: delay,
      }}
      style={{ width: "100%", height: "auto" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideY;
