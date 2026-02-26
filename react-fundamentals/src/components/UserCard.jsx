import { Link } from "react-router-dom";
function UserCard({ id, image, name, location, age }) {
  return (
    <article>
      <img src={image} alt={name} width="100" />
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{age} years old</p>
      <Link to={`/person/${id}`}>View details</Link>
    </article>
  );
}

export default UserCard;
