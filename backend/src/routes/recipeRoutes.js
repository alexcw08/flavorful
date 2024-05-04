import { query, param, validationResult } from "express-validator";
import {
  fetchRecipes,
  fetchRecipeID,
  fetchRandomRecipes,
} from "../services/recipeService.js";
// validators
const queryValidator = [query("food").trim().notEmpty().escape()];

const paramValidator = [param("id").trim().notEmpty().isNumeric().escape()];

// handlers
const handleRecipesReq = async (req, res) => {
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
    res.status(500).json({ error: error.message });
  }
};

const handleRecipeInfoReq = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validationErrors.array() });
  }
  try {
    const recipeID = req.params.id;
    const recipeData = await fetchRecipeID(recipeID);
    res.send(recipeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handleRandomRecipes = async (req, res) => {
  try {
    const randomRecipes = await fetchRandomRecipes();
    res.send(randomRecipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const recipeRoutes = (app) => {
  app.get("/api/recipes", queryValidator, handleRecipesReq);
  app.get("/api/recipe/:id", paramValidator, handleRecipeInfoReq);
  app.get("/api/random-recipes", handleRandomRecipes);
};

export default recipeRoutes;