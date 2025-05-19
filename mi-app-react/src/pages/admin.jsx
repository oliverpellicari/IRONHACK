import { useAuth } from '../AuthContext';
import { Navigate } from 'react-router-dom';

const Admin = () => {
  const { isLoggedIn } = useAuth();

  // Si no está logueado, redirige a Login
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <h2>Bienvenido al Panel de Administración</h2>;
};

export default Admin;
