import Header from "./components/Header/Header";
import HeroDescription from "./components/HeroDescription/HeroDescription";
import HeroTitle from "./components/HeroTitle/HeroTitle";
import "./hero.scss";
const Hero = () => {
  return (
    <div className="Hero">
      <Header />
      <HeroTitle />
      <HeroDescription />
    </div>
  );
};
export default Hero;
