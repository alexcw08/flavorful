import axios from "axios";
const baseRecipesURL = "https://api.spoonacular.com/recipes/";

const fetchData = async (apiEndpoint, key) => {
  // makes the external api call using endpoint and key given
  try {
    const apiRes = await axios.get(
      `${baseRecipesURL}${apiEndpoint}&apiKey=${key}`
    );
    return apiRes.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export const fetchRecipes = async (foodQuery) => {
  // fetches a list of recipes based on query
  const key = process.env.RECIPE_KEY;
  const endpoint = `complexSearch?query=${foodQuery}`;
  return fetchData(endpoint, key);
};

export const fetchRecipeID = async (recipeId) => {
  // fetches recipe information by id
  const key = process.env.RECIPE_KEY;
  const endpoint = `${recipeId}/information?`;
  return fetchData(endpoint, key);
};

export const fetchSimilarRecipes = async (recipeId) => {
  // fetches similar recipes based on recipe id
  const key = process.env.RECIPE_KEY;
  const endpoint = `${recipeId}/similar?`;
  return fetchData(endpoint, key);
};

export const fetchRandomRecipes = async () => {
  // fetches 5 random recipes
  const key = process.env.RECIPE_KEY;
  const endpoint = `random?number=5`;
  return fetchData(endpoint, key);
};
