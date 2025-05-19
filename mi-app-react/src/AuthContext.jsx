import { createContext, useState, useContext } from 'react';

// Creamos un contexto para manejar el estado de autenticación
const AuthContext = createContext();

// Hook personalizado para acceder fácilmente al contexto
export const useAuth = () => useContext(AuthContext);

// Proveedor que envuelve toda la aplicación
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);  // Simula login
  const logout = () => setIsLoggedIn(false); // Simula logout

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

