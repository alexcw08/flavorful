import "./App.css";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [searchResults, setSearchResults] = useState({ results: [] });
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home setSearchResults={setSearchResults} />}
        />
        <Route
          path="/recipes"
          element={
            <Recipes
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
