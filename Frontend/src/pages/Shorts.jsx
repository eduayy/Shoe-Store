import { useEffect, useState } from "react";
import "./Shorts.css";
import Navbar from "../component/Navbar";

function Shorts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/shorts")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <main className="shorts-container">
      <Navbar />

      <header className="shorts-header">
        <h1>🩳 Shorts deportivos</h1>
        <p>Ligereza y comodidad para un mejor desempeño.</p>
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

export default Shorts;
