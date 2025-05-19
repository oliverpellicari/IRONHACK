// Importa las dependencias necesarias
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import './login.css';

// Componente de login que permite al usuario ingresar sus credenciales
const Login = () => {
  // Obtiene la función de login del contexto de usuario
  const { login } = useContext(UserContext);

  // Crea estados para almacenar el nombre de usuario y la contraseña
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Crea un estado para almacenar el mensaje de error
  const [error, setError] = useState("");

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    // Evita que se envíe el formulario por defecto
    e.preventDefault();

    // Llama a la función de login con las credenciales ingresadas
    const success = login(username, password);

    // Si la función de login devuelve false, muestra un mensaje de error
    if (!success) {
      setError("Credenciales incorrectas");
    }
  };

  // Retorna el formulario de login
  return (
    <div className="container">
      <div className="login-box">
        {/* Muestra el mensaje de error si existe */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Campo de texto para ingresar el nombre de usuario */}
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br/>

          {/* Campo de texto para ingresar la contraseña */}
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>

          {/* Botón para enviar el formulario */}
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

// Exporta el componente de login
export default Login;