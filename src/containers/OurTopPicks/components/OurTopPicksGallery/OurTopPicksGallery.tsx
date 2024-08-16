import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import "./OurTopPicksGallery.scss";
import { topPicksData } from "../../data/TopPicks-data";
import { Dispatch, SetStateAction } from "react";
import { TopPicks } from "../../interfaces/TopPicks.type";
import { useTheBrandHooks } from "@/containers/TheBrands/hooks/useTheBrandHooks";

interface OurTopPicksGalleryProps {
  setActivePicks: Dispatch<SetStateAction<TopPicks>>;
  setShowDetail: Dispatch<SetStateAction<boolean>>;
}

const OurTopPicksGallery = ({
  setActivePicks,
  setShowDetail,
}: OurTopPicksGalleryProps) => {
  const handlePicksClick = (item: TopPicks) => {
    setActivePicks(item);
    setShowDetail(true);
  };
  const { brandlListContainerRef, scrollLeft, scrollRight } =
    useTheBrandHooks();
  return (
    <div className="OurTopPicksGallery">
      <h2>
        OUR TOP <br /> PICKS
      </h2>
      <button className="OurTopPicksGallery-cta">
        <span>SEE ALL OUTFIT</span>
        <ChevronRight strokeWidth={3} className="chevron-right-icon" />
      </button>

      <div className="OurTopPicksGalleryCarousel" ref={brandlListContainerRef}>
        {topPicksData.map((item) => (
          <img
            src={item.image}
            alt="image"
            className="topPicksItem"
            onClick={() => handlePicksClick(item)}
            key={item.id}
          />
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
export default OurTopPicksGallery;
