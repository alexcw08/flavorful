import { Header } from "../components/Header";
import RandomRecipes from "../components/RandomRecipes";
import RecipeOfDay from "../components/RecipeOfDay";
import SearchBar from "../components/SearchBar";
function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <RecipeOfDay />
      <RandomRecipes />
    </>
  );
}

export default Home;
