import { useGlobalContext } from "../context/context";

function Search() {
  const {
    search,
    setSearch,
    btnDisabled,
    setBtnDisabled,
    fetchMovies,
    handleSubmit,
  } = useGlobalContext();
  const handleOnchange = (e) => {
    if (search.trim().length >= 1) {
      setBtnDisabled(false);
    }
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
        />
        <button
          type='submit'
          className={`${btnDisabled ? "btn btn-disabled" : "btn"}`}
          disabled={btnDisabled}
        >
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
