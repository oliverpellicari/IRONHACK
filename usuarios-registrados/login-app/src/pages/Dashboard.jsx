// Importa las dependencias necesarias
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Componente que representa el panel de usuarios
const Dashboard = () => {
  // Crea un estado para almacenar la lista de usuarios
  const [usuarios, setUsuarios] = useState([]);

  // Utiliza el hook useEffect para realizar una solicitud GET a la API de usuarios
  useEffect(() => {
    // Realiza la solicitud GET a la API de usuarios
    fetch("https://jsonplaceholder.typicode.com/users")
      // Convierte la respuesta a JSON
      .then(res => res.json())
      // Actualiza el estado de usuarios con la lista de usuarios obtenida
      .then(data => setUsuarios(data));
  }, []); // El arreglo vacío indica que el efecto se ejecutará solo una vez, al montar el componente

  // Retorna el panel de usuarios
  return (
    <div>
      <h2>Panel de Usuarios</h2>
      <ul>
        {/* Mapea la lista de usuarios y crea un elemento de lista para cada usuario */}
        {usuarios.map(user => (
          <li key={user.id}>
            {/* Muestra el nombre del usuario */}
            <strong>{user.name}</strong> - {user.email} -{" "}
            {/* Crea un enlace para ver los detalles del usuario */}
            <Link to={`/user/${user.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporta el componente
export default Dashboard;