// Importa las dependencias necesarias
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

// Componente que representa el encabezado de la aplicación
const Header = () => {
  // Obtiene el objeto usuario actual y la función de cierre de sesión desde el contexto de usuario
  const { user, logout } = useContext(UserContext);

  // Retorna el encabezado con la navegación
  return (
    <header>
      <nav>
        {/* Enlace a la página de inicio */}
        <Link to="/">Inicio</Link> |{" "}
        {/* Verifica si el usuario está autenticado */}
        {user ? (
          // Si está autenticado, muestra los enlaces y el nombre del usuario
          <>
            {/* Enlace al dashboard */}
            <Link to="/dashboard">Dashboard</Link> |{" "}
            {/* Muestra el nombre del usuario */}
            <span>{user.name}</span> |{" "}
            {/* Botón para cerrar sesión */}
            <button onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          // Si no está autenticado, muestra el enlace de login
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

// Exporta el componente
export default Header;