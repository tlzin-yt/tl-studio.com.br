// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de Verificação de Status do Servidor
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ONLINE',
    system: 'TL STUDIO BACKEND V1.0',
    timestamp: new Date()
  });
});

// Inicialização do Servidor
app.listen(PORT, () => {
  console.log(`[TL STUDIO] Servidor back-end rodando na porta ${PORT}`);
});
