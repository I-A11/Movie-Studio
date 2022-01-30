import { useEffect } from "react";
import Movie from "./Movie";
import Search from "./Search";

function FeaturedMovies({ movies, setMovies, setSearch }) {
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
      {movies.length > 0 && setSearch.length > 0 ? (
        movies.map((movie) => <Movie key={movie.id} {...movie} />)
      ) : (
        <div>
          <div className='not-found'>
            Could't find the movie you search for, Please try another movie.
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturedMovies;
