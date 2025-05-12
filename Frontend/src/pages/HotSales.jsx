import { useEffect, useState } from "react";
import "./HotSales.css";
import Navbar from "../component/Navbar";

function HotSales() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/hot-sales")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al obtener productos:", error));
  }, []);

  return (
    <main className="hot-sales-container">
      <Navbar />

      <header className="hot-sales-header">
        <h1>🔥 Ofertas Especiales</h1>
        <p>¡Los mejores descuentos en ropa deportiva!</p>
      </header>

      <section className="product-list">
        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p><strong>Antes:</strong> <s>{product.oldPrice} USD</s></p>
                <p><strong>Ahora:</strong> {product.price} USD</p>
                <button>Comprar</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="loading-message">Cargando productos en oferta...</p>
        )}
      </section>
    </main>
  );
}

export default HotSales;
