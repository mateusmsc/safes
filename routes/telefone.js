const express = require('express');
const app = express.Router();
const db = require('../models');


app.get("/getall", async (req, res) => {
  const fone = await db.telefone.findAll();
  res.json(fone);
});


module.exports = app;