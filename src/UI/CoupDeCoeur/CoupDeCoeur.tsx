import { listes } from "@/data/CoupsDeCoeur";
import "./CoupDeCoeur.scss";
import { useState } from "react";

interface CoupsDeCoeurItemProps {
  item: {
    image: string;
    title: string;
    price: number;
    colors: string[];
  };
}
const CoupDeCoeur = () => {
  return (
    <div className="CoupDeCoeur">
      <h2>COUPS DE CŒUR DU MOMENT</h2>
      <div className="CoupDeCoeur-container">
        {listes.map((item, index) => (
          <CoupDeCoeurItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

const CoupDeCoeurItem = ({ item }: CoupsDeCoeurItemProps) => {
  const [activeColor, setActiveColor] = useState(0);
  return (
    <div className="Card">
      <img src={item.image} alt="hero images" />
      <h3>{item.title}</h3>
      <p className="price">€ {item.price}</p>
      <p className="colors">
        {item.colors.map((color, index) => (
          <span
            onClick={() => setActiveColor(index)}
            className={`${activeColor === index ? "active" : ""}`}
            key={index}
            style={{ backgroundColor: color }}
          ></span>
        ))}
      </p>
      <button>AJOUTER AU PANIER</button>
    </div>
  );
};
export default CoupDeCoeur;
