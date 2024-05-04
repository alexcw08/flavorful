import axios from "axios";

const fetchRecipes = async (foodQuery) => {
  // fetches a list of recipes
  const key = process.env.RECIPE_KEY;
  const apiRes = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?query=${foodQuery}&apiKey=${key}`
  );
  return apiRes.data;
};
export default fetchRecipes;
