import { Link, useParams } from "react-router"
import { useState, useEffect } from "react"

const Details = () => {
  const { movieId } = useParams()
  const apiKey = import.meta.env.VITE_TMDB_API_KEY
  const [movieDetails, setMovieDetails] = useState({})

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error('Error fetching movies: ', error))
  }, [])

  return (
    <div>
      <h2>Movie details for {movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <Link to="/" >Back to movies</Link>
    </div>
  )
}

export default Details