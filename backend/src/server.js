const express = require("express");
const app = express();
const PORT = 3005;

const { query, validationResult } = require("express-validator");

app.get(
  "/api/recipes",
  query("food").trim().notEmpty().escape(),
  (req, res) => {
    const validateErrors = validationResult(req);
    if (validateErrors.isEmpty()) {
      // Valid request
      const foodQuery = req.query.food;
      res.send("Hello");
    } else {
      res.json({ message: "Invalid query." });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
