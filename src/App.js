import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import FeaturedMovies from "./components/FeaturedMovies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Search />
      <FeaturedMovies />
      <Footer />
    </div>
  );
}

export default App;
