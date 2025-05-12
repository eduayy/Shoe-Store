import { useEffect, useState } from "react";
import "./Underwear.css";
import Navbar from "../component/Navbar";

function Underwear() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/underware")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <main className="underwear-container">
      <Navbar />

      <header className="underwear-header">
        <h1>🩳 Ropa Interior Deportiva</h1>
        <p>Comodidad y rendimiento en cada entrenamiento.</p>
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

export default Underwear;
