import "./App.css";
import Cta from "./UI/Cta/Cta";
import Header from "./UI/Header/Header";
import CoupDeCoeurContainer from "./containers/CoupDeCoeurContainer";
import HeroContainer from "./containers/HeroContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroContainer />
      <div>
        <CoupDeCoeurContainer />
        <Cta />
      </div>
    </div>
  );
}

export default App;
