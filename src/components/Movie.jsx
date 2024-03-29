const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const setOverviewClass = (overview) => {
  if (overview.length < 150) {
    return "height1";
  } else if (overview.length < 250) {
    return "height3";
  } else {
    return "height2";
  }
};
function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div className='movie'>
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
        }
        alt={title}
      />
      <div className='movie-info'>
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average.toFixed(1)}
        </span>
      </div>
      <div className={`movie-over ${setOverviewClass(overview)}`}>
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default Movie;
