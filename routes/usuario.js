const express = require('express');
const app = express.Router();
const db = require('../models');

app.get("/getall", async (req, res) => {
  const user = await db.usuario.findAll();
  res.json(user);
});

app.post('/register', async (req, res) => {
  const user = await db.usuario.create({
    email: req.body.email,
    senha: req.body.senha,
    cod_tipo_usuario: req.body.cod_tipo_usuario
  });
  res.json(user);
});

app.delete('/del/:cod', async (req, res) => {
  const user = await db.usuario.destroy({
    where: {
      cod: req.params.cod
    }
  })
  res.json(user);
});

app.put('/update/:cod', async (req, res) => {
  const user = await db.usuario.update(
    {
      email: req.body.email,
      senha: req.body.senha,
      cod_tipo_usuario: req.body.cod_tipo_usuario
    },
    {
      where: {
        cod: req.params.cod
      }
    })
  res.json(user);
});

module.exports = app;
