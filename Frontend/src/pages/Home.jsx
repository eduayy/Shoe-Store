import "./Home.css";
import Navbar from "../component/Navbar"; 

function Home() {
  return (
    <main className="home-container">
         <Navbar />
      <header className="home-header">
        <h1>🏅 Shoe-Store - La mejor ropa deportiva</h1>
        <p>Encuentra tu estilo, maximiza tu rendimiento.</p>
      </header>

      <section className="featured-products">
        <h2>🔥 Productos Destacados</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Zapatillas deportivas" />
            <h3>Zapatillas de alto rendimiento</h3>
            <p>$79.99 USD</p>
            <button>Comprar</button>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Camiseta deportiva" />
            <h3>Camiseta Dry Fit</h3>
            <p>$29.99 USD</p>
            <button>Comprar</button>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/200" alt="Pantalón deportivo" />
            <h3>Pantalón elástico</h3>
            <p>$49.99 USD</p>
            <button>Comprar</button>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2025 Shoe-Store - Todos los derechos reservados</p>
      </footer>
    </main>
  );
}

export default Home;
