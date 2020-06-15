const express = require('express');
const app = express.Router();
const db = require('../models');

app.get("/getall", async (req, res) => {
  const paciente = await db.paciente.findAll();
  res.json(paciente);
});

app.post('/register', async (req, res) => {
  const paciente = await db.paciente.create({
    nome: req.body.nome,
    cpf: req.body.cpf,
    cod_usuario: req.body.cod_usuario,
    diagnostico: req.body.diagnostico,
    dt_nascimento: req.body.dt_nascimento
  });
  res.json(paciente);
});

app.delete('/del/:cod', async (req, res) => {
  const paciente = await db.paciente.destroy({
    where: {
      cod: req.params.cod
    }
  })
  res.json(paciente);
});

app.put('/update/:cod', async (req, res) => {
  const paciente = await db.paciente.update(
    {
      nome: req.body.nome,
      cpf: req.body.cpf,
      cod_usuario: req.body.cod_usuario,
      diagnostico: req.body.diagnostico,
      dt_nascimento: req.body.dt_nascimento
    },
    {
      where: {
        cod: req.params.cod
      }
    })
  res.json(paciente);
});

module.exports = app;
