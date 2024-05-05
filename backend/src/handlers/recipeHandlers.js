import {
  fetchRecipes,
  fetchRecipeID,
  fetchSimilarRecipes,
  fetchRandomRecipes,
} from "../services/recipeService.js";
import { validationResult } from "express-validator";
import { handleApiError } from "../utils/errorHandler.js";

export const handleRecipes = async (req, res) => {
  // call validator - check if err arr is not empty
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }
  // no errors - try fetch
  try {
    const recipeQuery = req.query.food;
    const recipesData = await fetchRecipes(recipeQuery);
    res.send(recipesData);
  } catch (error) {
    handleApiError(error, res);
  }
};

export const handleRecipeInfo = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }
  try {
    const recipeID = req.params.id;
    const recipeData = await fetchRecipeID(recipeID);
    res.send(recipeData);
  } catch (error) {
    handleApiError(error, res);
  }
};

export const handleSimilarRecipes = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }
  try {
    const recipeID = req.params.id;
    const similarRecipes = await fetchSimilarRecipes(recipeID);
    res.send(similarRecipes);
  } catch (error) {
    handleApiError(error, res);
  }
};

export const handleRandomRecipes = async (req, res) => {
  try {
    const randomRecipes = await fetchRandomRecipes();
    res.send(randomRecipes);
  } catch (error) {
    handleApiError(error, res);
  }
};
