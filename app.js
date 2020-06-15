// imports 
const path = require('path');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');

//
const usuario = require('./routes/usuario');
const telefone = require('./routes/telefone');
const tipo_usuario = require('./routes/tipo_usuario');
const paciente = require('./routes/paciente');
const endereco = require('./routes/endereco');
const psicologo = require('./routes/psicologo');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/usuario', usuario);
app.use('/fone', telefone);
app.use('/tipo_usuario', tipo_usuario);
app.use('/paciente', paciente);
app.use('/psi', psicologo);

module.exports = app;
