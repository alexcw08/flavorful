import { RecipeList } from "../components/RecipeList";

export default function RandomRecipes() {
  return (
    <section className="md:px-5">
      <h1 className=" text-xl md:text-3xl mb-4 ">Explore</h1>
      <RecipeList />
    </section>
  );
}
