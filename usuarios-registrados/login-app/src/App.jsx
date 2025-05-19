// Importa las dependencias necesarias para la navegación
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa los componentes y páginas de la aplicación
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails"; // Ruta opcional
import ProtectedRoute from "./ProtectedRoute";

// Importa el contexto del usuario
import { UserProvider } from "./context/UserContext";

// Componente principal de la aplicación
const App = () => {
  return (
    // Envolvemos toda la app en el proveedor del contexto de usuario
    <Router>
      <UserProvider>
        {/* Header siempre visible */}
        <Header />

        {/* Definimos las rutas de la aplicación */}
        <Routes>
          {/* Ruta de inicio */}
          <Route path="/" element={<Home />} />

          {/* Ruta de login */}
          <Route path="/login" element={<Login />} />

          {/* Ruta protegida: solo accesible si el usuario está logueado */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Ruta protegida con parámetro :id */}
          <Route
            path="/user/:id"
            element={
              <ProtectedRoute>
                <UserDetails />
              </ProtectedRoute>
            }
          />

          {/* Ruta por defecto si la URL no coincide con ninguna */}
          <Route path="*" element={<p>Página no encontrada</p>} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

// Exporta el componente principal de la aplicación
export default App;