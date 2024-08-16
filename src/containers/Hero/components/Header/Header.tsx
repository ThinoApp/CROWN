import "./Header.scss";
import { MenuIcon, FlameKindling } from "lucide-react";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.5,
      }}
      className="Header"
    >
      <div className="Header-logo">
        <FlameKindling />
        <p>Crown</p>
      </div>
      <button className="Header-menu">
        <MenuIcon />
      </button>
    </motion.div>
  );
};
export default Header;
