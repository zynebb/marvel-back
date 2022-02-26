require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const mongoose=require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.MONGODB_URI);

const characters = require("./data/characters.json");

const app = express();
app.use(cors());
// console.log(characters);
app.get("/", (req, res) => {
  res.json({ characters });
});
app.listen(process.env.PORT, () => console.log("server started"));
