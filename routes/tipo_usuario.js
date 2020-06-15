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
app.delete('/del/:cod', async (req, res) => {
  const tipo_usuario = await db.tipo_usuario.destroy({
    where: {
      cod: req.params.cod
    }
  })
  res.json(tipo_usuario);
});


app.put('/update/:cod', async (req, res) => {
  const tipo_usuario = await db.tipo_usuario.update(
    {
      nivel: req.body.nivel,
      descricao: req.body.descricao
    },
    {
      where: {
        cod: req.params.cod
      }
    })
  res.json(tipo_usuario);
});


module.exports = app;
