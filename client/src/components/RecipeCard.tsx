export const RecipeCard = ({ recipe }) => {
  let recipeImageURL = null;

  return (
    <div className="card rounded-none lg:rounded-box">
      {/* image */}
      <figure className="">
        {recipe.image ? (
          <img className=" md:object-cover " src={recipe.image} alt="" />
        ) : (
          <img className=" md:object-cover " src="/no-image.jpeg" alt="" />
        )}
      </figure>
      <div className="card-body w-full items-center py-1 ">
        {/* name of recipe */}
        <h2 className="text-center h-14 md:h-20 w-40 md:text-xl  overflow-hidden">
          {recipe.title}
        </h2>
        <div className="flex w-full flex-col items-center gap-y-2 mb-2 ">
          <div className="card-actions ">
            <button className="btn px-4">View Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
