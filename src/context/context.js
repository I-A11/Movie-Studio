import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

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
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
    setSearch("");
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        movies,
        setMovies,
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
