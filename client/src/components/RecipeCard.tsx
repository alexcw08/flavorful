export const RecipeCard = ({ recipe }) => {
  let recipeImageURL = null;

  return (
    <div className="card shadow-xl ">
      <figure className="">
        {recipe.image ? (
          <img
            className="object-contain md:object-cover h-full w-full"
            src={recipe.image}
            alt=""
          />
        ) : (
          <img
            className="object-contain md:object-cover h-full w-full"
            src="/no-image.jpeg"
            alt=""
          />
        )}
      </figure>
      <div className="card-body  justify-between gap-y-4">
        <h2 className="card-title">{recipe.title}</h2>
        <div className="flex gap-y-8 flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-y-2   justify-center">
            {recipe.vegetarian ? (
              <div className="badge badge-primary join-item">Vegetarian</div>
            ) : null}
            {recipe.vegan ? (
              <div className="badge badge-secondary join-item">Vegan</div>
            ) : null}
            <div className="badge badge-secondary join-item">Vegan</div>
          </div>
          <div className="card-actions ">
            <button className="btn btn-sm lg:btn-md">View Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
