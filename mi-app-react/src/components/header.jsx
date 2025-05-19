import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Header = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header style={{ padding: '1rem', backgroundColor: '#eee' }}>
      {/* Enlaces de navegación */}
      <Link to="/">Inicio</Link> |{' '}
      <Link to="/login">Login</Link> |{' '}
      <Link to="/admin">Administración</Link>

      {/* Botón para cerrar sesión si está logueado */}
      {isLoggedIn && (
        <button onClick={logout} style={{ marginLeft: '1rem' }}>
          Cerrar sesión
        </button>
      )}
    </header>
  );
};

export default Header;
