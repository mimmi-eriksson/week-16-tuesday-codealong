import "./Card.css"
import { Link } from "react-router"

const Card = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} >
      <article className="card">
        <h3>{movie.title}</h3>
      </article>
    </Link>

  )
}

export default Card