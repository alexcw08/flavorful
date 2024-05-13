import { recipeOfTheDay as recipe } from "../data/defaultData.js";

export default function RecipeOfDay() {
  let recipeImageURL = null;
  return (
    <div className="my-4">
      <h1 className="text-2xl text-center mb-2 lg:text-start">
        Recipe of The Day
      </h1>
      <div className="card card-side rounded-none  w-full m-auto">
        <figure className="">
          {recipe.image ? (
            <img className=" md:object-cover " src={recipe.image} alt="" />
          ) : (
            <img className=" md:object-cover " src="/no-image.jpeg" alt="" />
          )}
        </figure>
        <div className="flex flex-col justify-evenly ">
          <h2 className="pl-2 md:pl-4 md:text-2xl lg:text-3xl lg:text-center">
            {recipe.title}
          </h2>
          <div className="h-10  flex justify-evenly md:justify-center items-center">
            <div className="badge badge-neutral md:p-4 md:mr-2 lg:text-xl">
              {recipe.readyInMinutes} minutes
            </div>
            <div className="badge badge-neutral md:p-4 md:ml-2 lg:text-xl">
              {recipe.servings} servings
            </div>
          </div>
          <div className="card-actions justify-center">
            <button className="btn px-2 lg:px-4 lg:text-xl">View Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
