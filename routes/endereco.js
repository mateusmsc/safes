const express = require('express');
const app = express.Router();
const db = require('../models');

app.get("/getall", async (req, res) => {
  const endereco = await db.endereco.findAll();
  res.json(endereco);
});

app.post('/register', async (req, res) => {
  const endereco = await db.endereco.create({
    cep: req.body.cep,
    complemento: req.body.complemento,
    cod_usuario: req.body.cod_usuario
  });
  res.json(endereco);
});

app.delete('/del/:cod', async (req, res) => {
  const endereco = await db.endereco.destroy({
    where: {
      cod: req.params.cod
    }
  })
  res.json(endereco);
});

app.put('/update/:cod', async (req, res) => {
  const endereco = await db.endereco.update(
    {
      cep: req.body.cep,
      complemento: req.body.complemento,
      cod_usuario: req.body.cod_usuario
    },
    {
      where: {
        cod: req.params.cod
      }
    })
  res.json(endereco);
});

module.exports = app;
