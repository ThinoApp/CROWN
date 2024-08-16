import { FlameKindling } from "lucide-react";
import "./Footer.scss";
import { links } from "./data/footer-links";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-copyright">
        <div className="Footer-logo">
          <FlameKindling className="icon" />
          <p>Crown</p>
        </div>
        <p className="copyright">© 2024 Thino Rakotomalala</p>
      </div>
      <div className="Footer-links">
        {links.map((link, index) => (
          <a href="#" key={index}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Footer;
