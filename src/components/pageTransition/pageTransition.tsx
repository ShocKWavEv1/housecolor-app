import { AnimatePresence, motion } from "framer-motion";
import { PageTransitionProps } from "./model";

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  pathname,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
