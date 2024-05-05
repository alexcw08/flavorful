import {
  handleRecipes,
  handleRecipeInfo,
  handleSimilarRecipes,
  handleRandomRecipes,
} from "../handlers/recipeHandlers.js";

import {
  queryValidator,
  paramValidator,
} from "../validators/recipeValidator.js";

const recipeRoutes = (app) => {
  app.get("/api/recipes", queryValidator, handleRecipes);
  app.get("/api/recipes/:id", paramValidator, handleRecipeInfo);
  app.get("/api/recipes/:id/similar", paramValidator, handleSimilarRecipes);
  app.get("/api/recipes-random", handleRandomRecipes);
};

export default recipeRoutes;
