import { defaultData } from "../data/defaultData.js";
import { RecipeCard } from "./RecipeCard.js";

export const RecipeList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {/* grid md:grid-cols-5 w-full gap-8 px-8  py-4 md:px-2 md:py-2 lg:gap-0 */}
      {defaultData.recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};
