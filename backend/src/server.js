const express = require("express");
const app = express();
const PORT = 3005;

app.get("/api/recipes", (req, res) => {
  const foodQuery = req.query.food;
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
