import { X } from "lucide-react";
import { TopPicks } from "../../interfaces/TopPicks.type";
import "./OurTopPicksDetail.scss";
import { Dispatch, SetStateAction, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { topPicksData } from "../../data/TopPicks-data";

interface OurTopPicksDetailProps {
  topPicks: TopPicks;
  className: string;
  setShowDetail: Dispatch<SetStateAction<boolean>>;
}

const OurTopPicksDetail = ({
  topPicks,
  setShowDetail,
  className,
}: OurTopPicksDetailProps) => {
  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  const showImage = useCallback(() => {
    return (
      <motion.div
        initial={{
          x: 200,
        }}
        whileInView={{
          x: 0,
        }}
        key="topPicks"
        className="topPicksImage-container"
      >
        {topPicksData.map((item) => (
          <motion.img
            src={item.image}
            alt="image"
            key={item.id}
            animate={{
              opacity: item.id === topPicks.id ? 1 : 0,
              transition: { duration: 0.5 },
              filter: item.id === topPicks.id ? "blur(0px)" : "blur(5px)",
            }}
          />
        ))}
      </motion.div>
    );
  }, [topPicks.id]);

  const showTitle = useCallback(() => {
    return (
      <motion.div
        initial={{
          x: 100,
        }}
        whileInView={{
          x: 0,
        }}
        key="topPicks"
        className="topPicksTitle-container"
      >
        {topPicksData.map((item) => (
          <motion.h2
            key={item.id}
            animate={{
              opacity: item.id === topPicks.id ? 1 : 0,
              transition: { duration: 0.5 },
              // filter: item.id === topPicks.id ? "blur(0px)" : "blur(5px)",
            }}
          >
            {item.title}
          </motion.h2>
        ))}
      </motion.div>
    );
  }, [topPicks.id]);

  return (
    <div className={`OurTopPicksDetail ${className}`}>
      <AnimatePresence mode="popLayout">
        {showImage()}
        {showTitle()}
        {/* <h2>{topPicks.title}</h2> */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 0.7 }}
        >
          {topPicks.description}
        </motion.p>
        <motion.h3
          className="origin-bottom"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.4 }}
        >
          ${topPicks.price}
        </motion.h3>
        <button
          onClick={handleCloseDetail}
          className="absolute bottom-4 right-4 sm:hidden"
        >
          <X strokeWidth={3} color="#fff" />
        </button>
      </AnimatePresence>
    </div>
  );
};
export default OurTopPicksDetail;
