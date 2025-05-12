import "./Login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, email }),
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
      <section className="form-section">
        <div className="login-header">
          <h1>Login</h1>
          <p>Welcome back to our app!</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="label-login" htmlFor="user-name">
            UserName:
          </label>
          <input
            className="form-input-login"
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <label className="label-login" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input-login"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="btn-submit" type="submit">
            Entrar
          </button>
        </form>
        {message && <p className="welcome-message">{message}</p>}
      </section>
    </main>
  );
}

export default Login;
