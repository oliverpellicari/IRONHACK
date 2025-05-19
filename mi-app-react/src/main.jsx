import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './AuthContext'; // Importamos el proveedor

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* Envuelve la App para que toda la app tenga acceso al login */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
