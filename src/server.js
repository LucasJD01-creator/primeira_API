const express = require('express');
const { pool } = require('./config/db'); // importa a pool de conexões com o banco de dados
const app = express();

// Importar os módulos de rotas
const agendaRoutes = require('./routes/agenda');
const barbeirosRoutes = require('./routes/barbeiros');
const clientesRoutes = require('./routes/clientes');
const servicosRoutes = require('./routes/servicos');

// Usar os módulos de rotas
app.use('/agenda', agendaRoutes);
app.use('/barbeiros', barbeirosRoutes);
app.use('/clientes', clientesRoutes);
app.use('/servicos', servicosRoutes);

// Rotas específicas que precisam ser mantidas no caminho original
app.use('/produtos-com-categoria', (req, res, next) => {
  req.url = '/com-categoria';
  produtosRoutes(req, res, next);
});

app.use('/movimentacoes-completas', (req, res, next) => {
  req.url = '/completas';
  movimentacoesRoutes(req, res, next);
});

module.exports = app;