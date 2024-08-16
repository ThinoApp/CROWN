import "./HeroDescription.scss";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
const HeroDescription = () => {
  return (
    <div className="HeroDescription">
      <motion.p
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }}
        className="HeroDescription-text"
      >
        OUR PERSONAL STYLISTS WILL HAND SELECT NEW OUTFITS TO SUIT YOUR
        PERSONALITY AND LIFESTYLE.
      </motion.p>
      <motion.button
        initial={{
          scale: 0,
        }}
        whileInView={{
          scale: 1,
        }}
        className="HeroDescription-cta"
      >
        <span>get started</span>
        <ChevronRight className="chevron-right-icon" />
      </motion.button>
      <button className="scrollMoreBtn">scroll for more</button>
    </div>
  );
};

export default HeroDescription;
