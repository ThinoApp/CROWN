import { useState } from "react";
import OurTopPicksDetail from "./components/OurTopPicksDetail/OurTopPicksDetail";
import OurTopPicksGallery from "./components/OurTopPicksGallery/OurTopPicksGallery";
import { TopPicks } from "./interfaces/TopPicks.type";
import "./OurTopPicks.scss";
import { topPicksData } from "./data/TopPicks-data";
const OurTopPicks = () => {
  const [activePicks, setActivePicks] = useState<TopPicks>(topPicksData[0]);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="OurTopPicks">
      <OurTopPicksGallery {...{ setActivePicks, setShowDetail }} />

      <OurTopPicksDetail
        topPicks={activePicks}
        setShowDetail={setShowDetail}
        className={`${
          showDetail
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-0 opacity-0 pointer-events-none"
        } sm:scale-100 sm:opacity-100 sm:pointer-events-auto`}
      />
    </div>
  );
};
export default OurTopPicks;
