import { useGlobalContext } from "../context/context";

function Search() {
  const { search, setSearch, fetchMovies, handleSubmit } = useGlobalContext();
  const handleOnchange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='search-container'>
      <h2>Search Movies</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search a Movie'
          className='search'
          value={search}
          onChange={handleOnchange}
          required
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
      <button className='btn btn-back' onClick={fetchMovies}>
        Back to movies
      </button>
    </div>
  );
}

export default Search;
