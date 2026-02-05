const express = require('express');
const { pool } = require('./config/db'); // importa a pool de conexões com o banco de dados
const app = express();

module.exports = app;