import "./App.scss";
import Footer from "./containers/Footer/Footer";
import FashionFit from "./containers/FashionFit/FashionFit";
import Hero from "./containers/Hero/Hero";
import MeetTheStylists from "./containers/MeetTheStylists/MeetTheStylists";
import OurTopPicks from "./containers/OurTopPicks/OurTopPicks";
import TheBrands from "./containers/TheBrands/TheBrands";

function App() {
  return (
    <div className="App">
      <Hero />
      <MeetTheStylists />
      <FashionFit />
      <TheBrands />
      <OurTopPicks />
      <Footer />
    </div>
  );
}

export default App;
