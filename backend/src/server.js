import express from "express";
import recipeRoutes from "./routes/recipeRoutes.js";
import dotenv from "dotenv";
const app = express();
const PORT = 3005;
dotenv.config();
recipeRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
