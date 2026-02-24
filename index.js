require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
// asdasdasdasd

app.use(express.json());
mongoose
  .connect(
    process.env.DB_URL,
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.get("/", (req, res) => {
  res.send("Hello, World!");
});


const port = process.env.PORT || 8000;

app.listen(8000, () => {
  console.log(`Server is running on port ${port}`);
});
