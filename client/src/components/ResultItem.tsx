import { recipeOfTheDay as recipe } from "../data/defaultData";
export default function ResultItem() {
  let recipeImageURL = null;
  return (
    <div className="w-auto ">
      <div className=" card card-side rounded-none">
        {/* Image */}
        <figure className="w-1/3">
          {recipe.image ? (
            <img className=" md:object-cover " src={recipe.image} alt="" />
          ) : (
            <img className=" md:object-cover " src="/no-image.jpeg" alt="" />
          )}
        </figure>
        {/* Title and description */}
        <div className="w-1/3">
          <h1 className="pl-4 text-center md:text-xl">{recipe.title}</h1>
        </div>
        {/* Attributres in badges */}
        <div className="w-1/3  flex flex-col items-center justify-evenly">
          <div className="badge badge-neutral md:p-6 md:text-xl">
            {recipe.readyInMinutes} minutes
          </div>
          <div className="badge badge-neutral md:p-6 md:text-xl">
            {recipe.servings} servings
          </div>
        </div>
      </div>
      <div className=" flex justify-center  p-2">
        <button className=" px-4 py-2 rounded-md md:text-xl">View</button>
      </div>
    </div>
  );
}
