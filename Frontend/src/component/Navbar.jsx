import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">🏅 Shoe-Store</h1>
      <ul className="nav-links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Clothing">Ropa</Link></li>
        <li><Link to="/Underwear">Ropa Interior</Link></li>
        <li><Link to="/SportShoes">Tenis Deportivos</Link></li>
        <li><Link to="/Shorts">Shorts</Link></li>
        <li><Link to="/HotSales">Ofertas</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
