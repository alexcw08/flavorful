import { defaultData } from "../data/defaultData.js";
import { RecipeCard } from "./RecipeCard.js";

export const RecipeList = () => {
  return (
    <div className="grid md:grid-cols-4 w-full gap-4 px-8  py-4 md:px-2 md:py-2 ">
      {defaultData.recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};
