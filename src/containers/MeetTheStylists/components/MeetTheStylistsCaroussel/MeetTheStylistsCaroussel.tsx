import { useState } from "react";
import "./MeetTheStylistsCaroussel.scss";
import { motion } from "framer-motion";
import { baseUrl } from "@/config";
const MeetTheStylistsCaroussel = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="MeetTheStylistsCaroussel">
      {[0, 1, 2, 3].map((item) => (
        <motion.div
          className={`${
            active === item ? "pointer-events-none" : "pointer-events-auto"
          } caroussel-item ${active === item ? "z-50" : ""}`}
          animate={{
            translateX:
              active != item
                ? item % 2 === 0
                  ? `${40 * item}%`
                  : `${-40 * item}%`
                : 0,
            translateY: active === item ? "20%" : `${item * 10}%`,
            scale: active === item ? 1.3 : 1,
          }}
          onClick={() => setActive(item)}
        >
          <motion.img
            src={`${baseUrl}/assets/images/CDC_1.png`}
            animate={{
              boxShadow:
                active === item
                  ? "0px 0px 20px 0px #C3C0A2"
                  : "0px 0px 0px 0px #000000",
            }}
            alt="c_1"
          />
          <motion.p
            animate={{
              opacity: active === item ? 1 : 0,
            }}
            className="caroussel-label"
          >
            KAY
          </motion.p>
          <motion.p
            animate={{
              opacity: active === item ? 1 : 0,
            }}
            className="caroussel-description"
          >
            As the Head of Styling, she is all about the detail & ensures all of
            our clients look and feel great.
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};
export default MeetTheStylistsCaroussel;
