import { useEffect, useState } from "react";
import "./Clothing.css";
import Navbar from "../component/Navbar";

function Clothing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/clothing")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <main className="clothing-container">
      <Navbar />
      
      <header className="clothing-header">
        <h1>👕 Ropa deportiva</h1>
        <p>Descubre la mejor ropa para entrenar con estilo y comodidad.</p>
      </header>

      <section className="product-list">
        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price} USD</p>
                <button>Comprar</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="loading-message">Cargando productos...</p>
        )}
      </section>
    </main>
  );
}

export default Clothing;
