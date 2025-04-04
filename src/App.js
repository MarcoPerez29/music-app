import { Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import SongDetail from "./components/SongDetail";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyle from "./theme/GlobalStyle";

const App = () => {  
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<SearchResults />} />
          <Route path="/song/:id" element={<SongDetail />}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
