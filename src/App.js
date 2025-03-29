import { Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import "./App.css";
import SongDetail from "./components/SongDetail";

const App = () => {  
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<SearchResults />} />
        <Route path="/song/:id" element={<SongDetail />}/>
      </Routes>
    </div>
  );
};

export default App;
