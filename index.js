const express = require("express");
// const mongoose=require("mongoose");
const cors = require("cors");

const characters = require("./data/characters.json");

const app = express();
app.use(cors());
// console.log(characters);
app.get("/", (req, res) => {
  res.json({ characters });
});
app.listen(3000, () => console.log("server started"));
