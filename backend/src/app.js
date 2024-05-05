import express from "express";
import recipeRoutes from "./routes/recipeRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
recipeRoutes(app);

export default app;
