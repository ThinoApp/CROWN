import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import "./OurTopPicksGallery.scss";
import { topPicksData } from "../../data/TopPicks-data";
import { Dispatch, SetStateAction } from "react";
import { TopPicks } from "../../interfaces/TopPicks.type";
import { useTheBrandHooks } from "@/containers/TheBrands/hooks/useTheBrandHooks";
import { motion } from "framer-motion";

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
      <motion.h2
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }}
      >
        OUR TOP <br /> PICKS
      </motion.h2>
      <button className="OurTopPicksGallery-cta">
        <span>SEE ALL OUTFIT</span>
        <ChevronRight strokeWidth={3} className="chevron-right-icon" />
      </button>

      <motion.div
        initial={{
          y: 100,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="OurTopPicksGalleryCarousel"
        ref={brandlListContainerRef}
      >
        {topPicksData.map((item) => (
          <img
            src={item.image}
            alt="image"
            className="topPicksItem"
            onClick={() => handlePicksClick(item)}
            key={item.id}
          />
        ))}
      </motion.div>
      <div className="TheBrands-control">
        <motion.button
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          className="btn-left"
          onClick={scrollLeft}
        >
          <ArrowLeft size={24} />
        </motion.button>
        <motion.button
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="btn-left"
          onClick={scrollRight}
        >
          <ArrowRight size={24} />
        </motion.button>
      </div>
    </div>
  );
};
export default OurTopPicksGallery;
