const express = require('express');
const app = express.Router();
const db = require('../models');


app.get("/getall", async (req, res) => {
  const fone = await db.telefone.findAll();
  res.json(fone);
});

app.post('/register', async (req, res) => {
  const fone = await db.telefone.create({
    cod_usuario: req.body.cod_usuario,
    num: req.body.num
  });
  res.json(user);
});

app.delete('/del/:cod', async (req, res) => {
  const fone = await db.telefone.destroy({
    where: {
      cod: req.params.cod
    }
  })
  res.json(fone);
});

app.put('/update/:cod', async (req, res) => {
  const fone = await db.telefone.update(
    {
      cod_usuario: req.body.cod_usuario,
      num: req.body.num
    },
    {
      where: {
        cod: req.params.cod
      }
    })
  res.json(fone);
});




module.exports = app;