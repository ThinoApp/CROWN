import { ArrowLeft, ArrowRight } from "lucide-react";
import { theBrands } from "./data/the-brands";
import "./TheBrands.scss";
import { useTheBrandHooks } from "./hooks/useTheBrandHooks";
const TheBrands = () => {
  const { brandlListContainerRef, scrollLeft, scrollRight } =
    useTheBrandHooks();

  return (
    <div className="TheBrands">
      <h2>THE BRANDS</h2>
      <p>WE DO COLLABORATION WITH WORLDWIDE TOP BRANDS</p>
      <div className="TheBrands-list" ref={brandlListContainerRef}>
        {theBrands.map((brand) => (
          <div key={brand.id} className="TheBrands-list-item">
            <img
              className="TheBrands-list-item-logo"
              src={brand.image}
              alt={brand.name}
            />
            <p>
              <strong>{brand.name}</strong>
            </p>
          </div>
        ))}
      </div>

      <div className="TheBrands-control">
        <button className="btn-left" onClick={scrollLeft}>
          <ArrowLeft size={24} />
        </button>
        <button className="btn-left" onClick={scrollRight}>
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};
export default TheBrands;
