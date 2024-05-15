import { Header } from "../components/Header";
import FeaturedRecipes from "../components/FeaturedRecipes";
// import RecipeOfDay from "../components/RecipeOfDay";
import SearchBar from "../components/SearchBar";
function Home() {
  return (
    <>
      <Header />
      <div className="px-2 py-4 text-center">
        <h1 className="text-2xl font-bold mb-2">
          Explore over 5,000 diverse recipes.
        </h1>
        <h2 className="text-xl">
          Complete with detailed nutrition analysis, handy cooking tips, and
          related recipe suggestions to inspire your culinary creativity.
        </h2>
      </div>
      <SearchBar />
      <FeaturedRecipes />
    </>
  );
}

export default Home;
