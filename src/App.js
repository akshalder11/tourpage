import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroBack from "./Components/HeroSection/HeroBack";
import CardSection from "./Components/CardSection/CardSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBack />
      <CardSection />
      <CardSection />
    </div>
  );
}

export default App;
