import { ArrowLeft, ArrowRight } from "lucide-react";
import { theBrands } from "./data/the-brands";
import "./TheBrands.scss";
import { useTheBrandHooks } from "./hooks/useTheBrandHooks";
import { motion } from "framer-motion";
const TheBrands = () => {
  const { brandlListContainerRef, scrollLeft, scrollRight } =
    useTheBrandHooks();

  return (
    <div className="TheBrands">
      <motion.h2
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        transition={{
          delay: 0.5,
        }}
        className="origin-left"
      >
        THE BRANDS
      </motion.h2>
      <motion.p
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        transition={{
          delay: 0.5,
        }}
        className="origin-right"
      >
        WE DO COLLABORATION WITH WORLDWIDE TOP BRANDS
      </motion.p>
      <motion.div
        initial={{
          translateX: "-100%",
          opacity: 0,
        }}
        whileInView={{
          translateX: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.75,
        }}
        className="TheBrands-list"
        ref={brandlListContainerRef}
      >
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
          transition={{ delay: 0.2 }}
          className="btn-left"
          onClick={scrollRight}
        >
          <ArrowRight size={24} />
        </motion.button>
      </div>
    </div>
  );
};
export default TheBrands;
