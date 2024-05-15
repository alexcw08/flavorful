// import { RecipeList } from "../components/RecipeList";
import { defaultData } from "../data/defaultData.js";
import { RecipeCard } from "./RecipeCard.js";

export default function FeaturedRecipes() {
  return (
    <section className="md:px-5 ">
      <h1 className="text-xl pl-4 py-2 font-semibold   md:text-3xl ">
        Featured Recipes
      </h1>
      <h2 className="text-xl pl-4 font-light">
        Discover a curated collection of delicious recipes, handpicked just for
        you.
      </h2>
      <div className=" flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-5 py-6 gap-y-6 md:gap-x-8  lg:w-full lg:gap-x-12 ">
        {defaultData.recipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
