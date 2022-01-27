import { useEffect } from "react";
import Movie from "./Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

function FeaturedMovies({ movies, setMovies }) {
  const fetchData = async () => {
    const response = await fetch(FEATURED_API);
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
