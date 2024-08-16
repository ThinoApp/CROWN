import "./HeroTitle.scss";
import { Facebook, Instagram, MSquare } from "lucide-react";
const HeroTitle = () => {
  return (
    <div className="HeroTitle">
      <h3>we are stylists</h3>
      <h1>
        upgrade <br />
        your <br /> style
      </h1>
      <div className="HeroTitle-social-icon">
        <Facebook />
        <Instagram />
        <MSquare />
      </div>
    </div>
  );
};
export default HeroTitle;
