// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste para verificar se o servidor está online
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ONLINE',
    system: 'TL STUDIO BACKEND V1.0',
    timestamp: new Date()
  });
});

// Inicialização do Servidor
app.listen(PORT, () => {
  console.log(`[TL STUDIO] Servidor rodando na porta ${PORT}`);
});
