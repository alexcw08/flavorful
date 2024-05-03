import express from "express";
import recipeRoutes from "./routes/recipeRoutes.js";
const app = express();
const PORT = 3005;

recipeRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
