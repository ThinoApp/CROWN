import { ChevronRight } from "lucide-react";
import "./FashionFit.scss";
import { motion } from "framer-motion";
const FashionFit = () => {
  return (
    <motion.div className="FashionFit">
      <motion.h2
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }}
      >
        FIND YOUR FASHION'S FIT
      </motion.h2>
      <motion.button
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.1,
        }}
        className="FashionFit-cta"
      >
        <span>get started</span>
        <ChevronRight strokeWidth={3} className="chevron-right-icon" />
      </motion.button>
    </motion.div>
  );
};
export default FashionFit;
