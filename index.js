require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");
// const mongoose = require("mongoose");
const cors = require("cors");

// mongoose.connect(process.env.MONGODB_URI);

const characters = require("./data/characters.json");
const comics = require("./data/comics.json");
const app = express();
app.use(cors());
// console.log(characters);
console.log(comics);
app.get("/", (req, res) => {
  res.json({ characters });
});
app.get("/comics", (req, res) => {
  res.json({ comics });
});
app.all("*", function (req, res) {
  res.json({ message: "Page not found" });
});
app.listen(process.env.PORT || 3200, () => console.log("server started"));
