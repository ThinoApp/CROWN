import { TypedHead1Text } from "@/components/CustomText/CustomText";
import "./HeroTitle.scss";
import { motion } from "framer-motion";
import { Facebook, Instagram, MSquare } from "lucide-react";
const HeroTitle = () => {
  return (
    <div className="HeroTitle">
      <motion.h3
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.3,
        }}
      >
        we are stylists
      </motion.h3>
      <TypedHead1Text paragraph="upgrade your style" />

      <div className="HeroTitle-social-icon">
        <Facebook />
        <Instagram />
        <MSquare />
      </div>
    </div>
  );
};
export default HeroTitle;
