const express = require('express');
const app = express.Router();
const db = require('../models');

app.get("/getall", async (req, res) => {
  const psi = await db.psicologo.findAll();
  res.json(psi);
});

app.post('/register', async (req, res) => {
  const psi = await db.psicologo.create({
    nome: req.body.nome,
    crp: req.body.crp,
    cod_usuario: req.body.cod_usuario,
    cpf: req.body.cpf,
    dt_nascimento: req.body.dt_nascimento,
    cod_telfone: req.body.cod_telfone,
    cod_endereco: req.body.cod_endereco,
    formacao: req.body.formacao,
    dt_formacao: req.body.dt_formacao
  });
  res.json(psi);
});

app.delete('/del/:cod', async (req, res) => {
  const psi = await db.paciente.destroy({
    where: {
      cod: req.params.cod
    }
  })
  res.json(psi);
});

app.put('/update/:cod', async (req, res) => {
  const psi = await db.paciente.update(
    {
      nome: req.body.nome,
      crp: req.body.crp,
      cod_usuario: req.body.cod_usuario,
      cpf: req.body.cpf,
      dt_nascimento: req.body.dt_nascimento,
      cod_telfone: req.body.cod_telfone,
      cod_endereco: req.body.cod_endereco,
      formacao: req.body.formacao,
      dt_formacao: req.body.dt_formacao
    },
    {
      where: {
        cod: req.params.cod
      }
    })
  res.json(psi);
});

module.exports = app;
