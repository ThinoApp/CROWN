import Hero from "@/UI/Hero/Hero";
import { useEffect, useRef, useState } from "react";

const HeroContainer = () => {
  const [active, setActive] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  //carousel data
  const data = [
    {
      img: "/assets/images/hero_1.png",
      title: "Malagasy Artisans",
      desc: "Luxury Handmade",
    },
    {
      img: "/assets/images/hero_1.png",
      title: "Malagasy Artisans",
      desc: "Luxury Handmade",
    },
  ];
  useEffect(() => {
    if (ref.current) {
      const item = ref.current.children[active] as HTMLDivElement;
      if (item) {
        item.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }, [active]);

  const handleOnClick = (type = "left") => {
    if (type === "left") {
      if (active > 0) setActive((prev) => prev - 1);
    }
    if (type === "right") {
      if (active < 1) setActive((prev) => prev + 1);
    }
  };
  return (
    <>
      <Hero {...{ data, handleOnClick }} ref={ref} />
    </>
  );
};

export default HeroContainer;
