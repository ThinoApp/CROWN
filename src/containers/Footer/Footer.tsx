import { FlameKindling } from "lucide-react";
import "./Footer.scss";
import { links } from "./data/footer-links";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="Footer">
      <motion.div
        initial={{
          y: 100,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.3,
          type: "tween",
        }}
        className="Footer-copyright"
      >
        <div className="Footer-logo">
          <FlameKindling className="icon" />
          <p>Crown</p>
        </div>
        <p className="copyright">© 2024 Thino Rakotomalala</p>
      </motion.div>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="Footer-links"
      >
        {links.map((link, index) => (
          <a href="#" key={index}>
            {link}
          </a>
        ))}
      </motion.div>
    </div>
  );
};
export default Footer;
