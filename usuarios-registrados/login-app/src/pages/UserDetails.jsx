// Importa las dependencias necesarias
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Componente que muestra los detalles de un usuario
const UserDetails = () => {
  // Obtiene el parámetro de URL "id" utilizando el hook useParams
  const { id } = useParams();

  // Crea un estado para almacenar el objeto usuario
  const [usuario, setUsuario] = useState(null);

  // Utiliza el hook useEffect para realizar una solicitud GET a la API de usuarios
  useEffect(() => {
    // Realiza la solicitud GET a la API de usuarios, pasando el id del usuario como parámetro
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      // Convierte la respuesta a JSON
      .then(res => res.json())
      // Actualiza el estado de usuario con el objeto usuario obtenido
      .then(data => setUsuario(data));
  }, [id]); // El arreglo [id] indica que el efecto se ejecutará cada vez que el id cambie

  // Si el usuario no ha sido cargado, muestra un mensaje de carga
  if (!usuario) return <p>Cargando...</p>;

  // Retorna los detalles del usuario
  return (
    <div>
      <h2>{usuario.name}</h2>
      <p>Email: {usuario.email}</p>
      <p>Teléfono: {usuario.phone}</p>
      <p>Dirección: {usuario.address.street}, {usuario.address.city}</p>
      <p>Empresa: {usuario.company.name}</p>
    </div>
  );
};

// Exporta el componente
export default UserDetails;