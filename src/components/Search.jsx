const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function Search({ search, setSearch, setMovies, btnDisabled, setBtnDisabled }) {
  const handleOnchange = (e) => {
    if (search === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchMovies = async () => {
      const response = await fetch(SEARCH_API + search);
      const moviesResults = await response.json();
      setMovies(moviesResults.results);
    };
    fetchMovies();
    setSearch("");
    setBtnDisabled(true);
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
        />
        <button type='submit' disabled={btnDisabled} className='btn'>
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
