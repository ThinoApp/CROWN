import "./Header.scss";
import { MenuIcon, FlameKindling } from "lucide-react";
const Header = () => {
  return (
    <div className="Header">
      <div className="Header-logo">
        <FlameKindling />
        <p>Crown</p>
      </div>
      <button className="Header-menu">
        <MenuIcon />
      </button>
    </div>
  );
};
export default Header;
