import "./HeroDescription.scss";
import { ChevronRight } from "lucide-react";
const HeroDescription = () => {
  return (
    <div className="HeroDescription">
      <p className="HeroDescription-text">
        OUR PERSONAL STYLISTS WILL HAND SELECT NEW OUTFITS TO SUIT YOUR
        PERSONALITY AND LIFESTYLE.
      </p>
      <button className="HeroDescription-cta">
        <span>get started</span>
        <ChevronRight className="chevron-right-icon" />
      </button>
      <button className="scrollMoreBtn">scroll for more</button>
    </div>
  );
};

export default HeroDescription;
