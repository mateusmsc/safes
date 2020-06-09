// imports 
const path = require('path');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');

//
const usuario = require('./routes/usuario');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/usuario', usuario);

module.exports = app;
