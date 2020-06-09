const express = require('express');
const app = express.Router();
const db = require('../models');

app.get("/getall", async (req, res) => {
  const user = await db.Usuario.findAll();
  res.json(user);
});

app.post('/register', async (req, res) => {
  const user = await db.Usuario.create(req.body);
  res.json(user);
});

app.post('/register2', async (req, res) => {
  const tipo_usuario = await db.tipo_usuario.create(req.body);
  res.json(tipo_usuario);
});


module.exports = app;
