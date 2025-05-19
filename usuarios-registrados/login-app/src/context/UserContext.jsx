// Importa las dependencias necesarias
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Creamos el contexto para compartir datos entre componentes
export const UserContext = createContext();

// Creamos el proveedor del contexto que envuelve a los componentes hijos
export const UserProvider = ({ children }) => {
  // Creamos un estado para almacenar el usuario actual
  const [user, setUser] = useState(null);
  
  // Obtenemos la función de navegación para redirigir a otras rutas
  const navigate = useNavigate();

  // Creamos una función para iniciar sesión
  const login = (username, password) => {
    // Verificamos si el usuario y contraseña son correctos
    if (username === "admin" && password === "1234") {
      // Si son correctos, establecemos el usuario actual y redirigimos a la ruta de dashboard
      setUser({ name: "Administrador" });
      navigate("/dashboard");
    } else {
      // Si no son correctos, retornamos false
      return false;
    }
  };

  // Creamos una función para cerrar sesión
  const logout = () => {
    // Establecemos el usuario actual a null y redirigimos a la ruta de inicio
    setUser(null);
    navigate("/");
  };

  // Retornamos el proveedor del contexto con los valores que se compartirán entre componentes
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};