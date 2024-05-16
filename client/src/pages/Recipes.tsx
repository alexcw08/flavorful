import { useState } from "react";
import { Header } from "../components/Header";
import SearchBar from "../components/SearchBar";
import { RecipeCard } from "../components/RecipeCard";

export default function Recipes() {
  const [searchResults, setSearchResults] = useState({ results: [] });
  return (
    <>
      <Header />
      <SearchBar setSearchResults={setSearchResults} />
      <div className=" flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-5 py-6 gap-y-6 md:gap-x-8  lg:w-full lg:gap-x-12 ">
        {searchResults.results.length != 0
          ? searchResults.results.map((recipe) => {
              return <RecipeCard recipe={recipe} />;
            })
          : null}
      </div>
    </>
  );
}
