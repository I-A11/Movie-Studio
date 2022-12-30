import { useGlobalContext } from "../context/context";
import Movie from "./Movie";

function FeaturedMovies() {
  const { movies, setSearch, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className='loading'></div>;
  }
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
