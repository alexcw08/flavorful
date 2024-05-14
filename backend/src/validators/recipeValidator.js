import { query, param } from "express-validator";

export const queryValidator = [
  query("search")
    .trim()
    .notEmpty()
    .withMessage("Food query parameter is required.")
    .escape(),
];

export const paramValidator = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("ID parameter is required.")
    .isNumeric()
    .withMessage("ID must be a numeric value.")
    .escape(),
];
