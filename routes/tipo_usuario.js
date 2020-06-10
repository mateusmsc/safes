const express = require('express');
const app = express.Router();
const db = require('../models');

// Recupera todos os dados da tabela
app.get("/getall", async (req, res) => {
  const tipo_usuario = await db.tipo_usuario.findAll();
  res.json(tipo_usuario);
});


app.post('/register', async (req, res) => {
  const tipo_usuario = await db.tipo_usuario.create(req.body);
  res.json(tipo_usuario);
});

//
app.post('/del', async (req, res) => {
  const tipo_usuario = await db.tipo_usuario.destroy({
    where: {
      cod: req.body.cod
    }
  })
  res.json(tipo_usuario);
});


app.post('/update', async (req, res) => {
  const tipo_usuario = await db.tipo_usuario.update(
    {
      nivel: req.body.nivel,
      descricao: req.body.descricao
    },
    {
      where: {
        cod: req.body.cod
      }
    })
  res.json(tipo_usuario);
});


module.exports = app;
