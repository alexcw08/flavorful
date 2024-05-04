import { query, param } from "express-validator";

export const queryValidator = [query("food").trim().notEmpty().escape()];

export const paramValidator = [
  param("id").trim().notEmpty().isNumeric().escape(),
];
