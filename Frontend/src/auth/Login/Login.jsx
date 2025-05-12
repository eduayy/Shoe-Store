import "./Login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Bienvenido, ${data.email}`);
      } else {
        setMessage("Error al iniciar sesión. Inténtalo de nuevo.");
      }
    } catch (error) {
      setMessage("No se pudo conectar con el servidor.");
      console.error("Error:", error);
    }
  };

  return (
    <main className="main-content">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      {message && <p className="welcome-message">{message}</p>}
    </main>
  );
}

export default Login;
