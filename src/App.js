import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/MainRoutes/HomePage";
import DetailsPage from "./Components/MainRoutes/DetailsPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/details" element={<DetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
