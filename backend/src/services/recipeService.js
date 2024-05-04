import axios from "axios";

export const fetchRecipes = async (foodQuery) => {
  // fetches a list of recipes
  const key = process.env.RECIPE_KEY;
  const apiRes = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?query=${foodQuery}&apiKey=${key}`
  );
  return apiRes.data;
};

export const fetchRecipeID = async (recipeId) => {
  // fetches recipe information by id
  const key = process.env.RECIPE_KEY;
  console.log(recipeId);
  const apiRes = await axios.get(
    `https://api.spoonacular.com/recipes/${recipeId}/information?&apiKey=${key}`
  );
  return apiRes.data;
};
