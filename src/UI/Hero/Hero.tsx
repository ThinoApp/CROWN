import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Hero.scss";
import { forwardRef } from "react";
interface Props {
  data: {
    img: string;
    title: string;
    desc: string;
  }[];
  handleOnClick: (type: string) => void;
}

const Hero = forwardRef<HTMLDivElement, Props>(
  ({ data, handleOnClick }, ref) => {
    return (
      <div className="Hero">
        <div className="Hero-carousel" ref={ref}>
          {data.map((item, index) => (
            <div className="Box-1" key={index}>
              <img src={item.img} alt="hero images" />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="Hero-control">
          <button onClick={() => handleOnClick("left")}>
            <FiChevronLeft />
          </button>
          <button onClick={() => handleOnClick("right")}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    );
  }
);
export default Hero;
