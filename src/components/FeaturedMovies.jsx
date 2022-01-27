import { useEffect } from "react";
import Movie from "./Movie";

function FeaturedMovies({ movies, setMovies }) {
  const fetchData = async () => {
    const response = await fetch(process.env.REACT_APP_FEATURED_API);
    const moviesResults = await response.json();
    setMovies(moviesResults.results);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='movie-container'>
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}

export default FeaturedMovies;
