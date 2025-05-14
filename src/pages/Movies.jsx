import { useEffect, useState } from "react"
import Card from "../components/Card"

const Movies = () => {
  const [movies, setMovies] = useState([])
  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching movies: ', error))
  }, [])

  return (
    <div>
      <h2>The popular movies</h2>
      {movies.map((movie) => <Card key={movie.title} movie={movie} />)}
    </div>
  )
}

export default Movies