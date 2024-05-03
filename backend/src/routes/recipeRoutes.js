import { query, validationResult } from "express-validator";

const recipeRoutes = (app) => {
  app.get(
    "/api/recipes",
    query("food").trim().notEmpty().escape(),
    (req, res) => {
      const validateErrors = validationResult(req);
      if (validateErrors.isEmpty()) {
        // Valid request - fetch recipe
        const foodQuery = req.query.food;
        res.send("Hello");
      } else {
        // invalid request - send error back
        res.json({ message: "Invalid query." });
      }
    }
  );
};

export default recipeRoutes;
