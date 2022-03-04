const express = require("express");
const router = express.Router();
const axios = require("axios");
// Import des models
const Character = require("../models/Character");

router.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

// imaginons que nous aillons besoin d'effectuer une recherche dans la collection Teacher, nous aurions aussi besoin de ce model

module.exports = router;
