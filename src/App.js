import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import FeaturedMovies from "./components/FeaturedMovies";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);

  return (
    <div className='App'>
      <Navbar />
      <Search
        search={search}
        setSearch={setSearch}
        setMovies={setMovies}
        btnDisabled={btnDisabled}
        setBtnDisabled={setBtnDisabled}
      />
      <FeaturedMovies movies={movies} setMovies={setMovies} />
      <Footer />
    </div>
  );
}

export default App;
