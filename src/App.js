import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import "./App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = [
        { id: 1, title: "Leave The Door Open", artist: "Bruno Mars", duration: "4:20" },
        { id: 2, title: "The Way You Make Me Feel", artist: "Michael Jackson", duration: "4:57" },
        { id: 3, title: "Lose Control", artist: "Teddy Swims", duration: "3:57" }
      ];

      setSearchResults(response);
      
    };

    fetchSearchResults();
  }, []);
  
  const [library, setLibrary] = useState([]);

  const addToLibrary = (song) => {
    if (!library.some((s) => s.id === song.id)) {
      setLibrary([...library, song]);
    }
  };

  useEffect(() => {
    console.log("La biblioteca se ha actualizado", library);
  }, [library]);

  return (
    <div className="app">
      <Header />
      <SearchResults songs={searchResults} addToLibrary={addToLibrary} />
      <Library songs={library} />
    </div>
  );
};

export default App;
