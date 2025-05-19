// Importa la biblioteca de React
import React from 'react';

// Importa la biblioteca de ReactDOM para renderizar la aplicación en el DOM
import ReactDOM from 'react-dom/client';

// Importa el componente principal de la aplicación (App)
import App from './App';

// Importa el archivo de estilos CSS para la aplicación
import './styles.css'; // Importa aquí tu CSS

// Crea un elemento raíz en el DOM con el id "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  // Activa el modo estricto de React para detectar errores y advertencias
  <React.StrictMode>
    {/* // Renderiza el componente principal de la aplicación (App) */}
    <App />
  </React.StrictMode>
);