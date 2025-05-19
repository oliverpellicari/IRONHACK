// Importa las dependencias necesarias
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

// Componente que protege las rutas privadas
const ProtectedRoute = ({ children }) => {
  // Obtiene el objeto usuario actual desde el contexto de usuario
  const { user } = useContext(UserContext);

  // Verifica si el usuario está autenticado
  if (!user) {
    // Si no está autenticado, redirige a la ruta de login
    return <Navigate to="/login" />;
  }

  // Si está autenticado, renderiza los componentes hijos
  return children;
};

// Exporta el componente
export default ProtectedRoute;