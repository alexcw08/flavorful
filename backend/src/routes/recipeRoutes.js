import { query, validationResult } from "express-validator";
import fetchRecipes from "../services/recipeService.js";

const queryValidator = [query("food").trim().notEmpty().escape()];

const handleRecipesReq = async (req, res) => {
  // call validator - check if err arr is not empty
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ errors: validateErrors.array() });
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

const recipeRoutes = (app) => {
  app.get("/api/recipes", queryValidator, handleRecipesReq);
};

export default recipeRoutes;
