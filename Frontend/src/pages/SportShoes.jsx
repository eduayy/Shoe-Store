import { useEffect, useState } from "react";
import "./SportShoes.css";
import Navbar from "../component/Navbar";

function SportShoes() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/sport-shoes")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <main className="sport-shoes-container">
      <Navbar />

      <header className="sport-shoes-header">
        <h1>👟 Tenis Deportivos</h1>
        <p>Máximo rendimiento y estilo en cada paso.</p>
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

export default SportShoes;
