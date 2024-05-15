export const RecipeCard = ({ recipe }) => {
  let recipeImageURL = null;

  return (
    <div className="flex flex-col pb-2     rounded-xl">
      <figure className="  w-full rounded-xl">
        {recipe.image ? (
          <img className="w-full  rounded-t-lg" src={recipe.image} alt="" />
        ) : (
          <img
            // className="absolute inset-0 w-full h-full object-cover object-center"
            className="w-full rounded-t-lg"
            src="/no-image.jpeg"
            alt=""
          />
        )}
      </figure>
      <div className="flex flex-col flex-1  w-full px-4">
        <h1 className=" text-xl w-full h-16 pt-2 text-wrap font-semibold truncate">
          {recipe.title}
        </h1>
        <div className="flex  w-full flex-1">
          <div className="w-3/5 h-24 flex flex-col md:flex-row md:flex-wrap gap-x-4 gap-y-2   py-2  md:px-2 md:w-9/12">
            {recipe.vegetarian ? (
              <div className="badge badge-neutral py-4">Vegetarian </div>
            ) : null}
            {recipe.vegan ? (
              <div className="badge badge-neutral py-4">Vegan </div>
            ) : (
              <div className="badge badge-neutral py-4">Vegan </div>
            )}
            {recipe.glutenFree ? (
              <div className="badge badge-neutral py-4">Gluten-free </div>
            ) : null}
          </div>
          <div className=" flex flex-1 justify-center items-center ">
            <button className="btn px-6 md:px-4 lg:px-6 text-lg font-light md:text-base">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
