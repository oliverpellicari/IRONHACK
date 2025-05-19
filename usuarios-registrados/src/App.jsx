import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; // Importamos el contexto
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserDetail from './pages/UserDetail';
import Header from './components/Header';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    // Envolvemos todo en el Router y el UserProvider
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          {/* Rutas protegidas */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user/:id" element={<UserDetail />} />
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
