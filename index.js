require("dotenv").config();
const express = require("express");
// const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");

// mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(cors());
// console.log(characters);

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});
app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});
app.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      ` https://lereacteur-marvel-api.herokuapp.com/comics/5fc8ba1fdc33470f788f88b3?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});
// app.get("/comics", (req, res) => {
//   res.json({ comics });
// });
app.all("*", function (req, res) {
  res.json({ message: "Page not found" });
});
app.listen(process.env.PORT || 3000, () => console.log("server started"));
