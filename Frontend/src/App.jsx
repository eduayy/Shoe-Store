import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/auth/Login/Login.jsx";
import Home from "./pages/Home.jsx";
import Clothing from "./pages/Clothing.jsx";
import Underwear from "./pages/Underwear.jsx";
import Shorts from "./pages/Shorts.jsx";
import HotSales from "./pages/HotSales.jsx";
import SportShoes from "./pages/SportShoes.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Clothing" element={<Clothing />}></Route>
        <Route path="/Underwear" element={<Underwear />}></Route>
        <Route path="/Shorts" element={<Shorts />}></Route>
        <Route path="/HotSales" element={<HotSales />}></Route>
        <Route path="/SportShoes" element={<SportShoes />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
