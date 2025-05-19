import { useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Login = () => {
  const { login, isLoggedIn } = useAuth();    // Accedemos a login y al estado
  const navigate = useNavigate();             // Para redirigir

  const handleLogin = () => {
    login();              // Cambia el estado
    navigate('/admin');   // Redirige manualmente
  };

  // Si ya está logueado, redirigimos automáticamente
  if (isLoggedIn) {
    return (
      <>
        <h2>Ya estás logueado mendrugo</h2>
      </>
    );
  }else{
    return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
  }
};

export default Login;
