import express from "express";
import recipeRoutes from "./routes/recipeRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
recipeRoutes(app);

export default app;
