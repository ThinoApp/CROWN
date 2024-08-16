import { ChevronRight } from "lucide-react";
import "./FashionFit.scss";
const FashionFit = () => {
  return (
    <div className="FashionFit">
      <h2>FIND YOUR FASHION'S FIT</h2>
      <button className="FashionFit-cta">
        <span>get started</span>
        <ChevronRight strokeWidth={3} className="chevron-right-icon" />
      </button>
    </div>
  );
};
export default FashionFit;
