import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_FEATURED_API);
      const moviesResults = await response.json();
      setMovies(moviesResults.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (search.length > 0) {
        const response = await fetch(process.env.REACT_APP_SEARCH_API + search);
        const moviesResults = await response.json();
        setMovies(moviesResults.results);
        setIsLoading(false);
      } else {
        alert("Please enter a valid movie name");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
    setSearch("");
    setBtnDisabled(true);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    handleSubmit();
  }, [search]);

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        movies,
        setMovies,
        btnDisabled,
        setBtnDisabled,
        handleSubmit,
        isLoading,
        fetchMovies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
