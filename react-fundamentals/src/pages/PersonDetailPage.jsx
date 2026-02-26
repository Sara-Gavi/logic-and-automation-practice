import { useParams, Link } from "react-router-dom";

function PersonDetailPage({ people, isLoading }) {
  // 1. Leer el id de la URL (viene de /person/:id)
  const { id } = useParams();

  // 2. Mientras todavía estamos cargando datos
  if (isLoading) {
    return (
      <main>
        <p>Loading person...</p>
      </main>
    );
  }

  // 3. Buscar la persona en el array people usando el id
  const person = people.find((p) => p.id === id);

  // 4. Si no la encontramos (id raro o recarga)
  if (!person) {
    return (
      <main>
        <h1>Person not found</h1>
        <Link to="/">Back to list</Link>
      </main>
    );
  }

  // 5. Si la encontramos, mostramos los datos
  return (
    <main>
      <h1>{person.name}</h1>
      <img src={person.image} alt={person.name} width="150" />
      <p>{person.location}</p>
      <p>{person.age} years old</p>
      <p>Gender: {person.gender}</p>

      <Link to="/">Back to list</Link>
    </main>
  );
}

export default PersonDetailPage;
