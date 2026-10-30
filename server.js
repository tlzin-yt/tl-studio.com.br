// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de Status
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ONLINE',
    system: 'TL STUDIO BACKEND V1.0',
    timestamp: new Date()
  });
});

// Rota de IA para o Chatbot
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Mensagem não fornecida.' });
  }

  try {
    // Aqui você pode processar a mensagem ou conectar com uma API externa de IA (como Gemini, OpenAI, etc.)
    // Por enquanto, criamos uma resposta inteligente baseada no contexto da TL STUDIO:
    
    let aiResponse = "";
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes('preço') || lowerMsg.includes('valor') || lowerMsg.includes('custa')) {
      aiResponse = "Os valores variam conforme a complexidade do projeto. Você pode usar a nossa Calculadora de Orçamento interativa logo acima na página para ter uma estimativa exata!";
    } else if (lowerMsg.includes('discord') || lowerMsg.includes('servidor')) {
      aiResponse = "Na TL STUDIO nós estruturamos servidores de Discord profissionais com cargos, canais, sistema de tickets e automação por Webhooks.";
    } else if (lowerMsg.includes('site') || lowerMsg.includes('página') || lowerMsg.includes('web')) {
      aiResponse = "Desenvolvemos páginas web modernas, responsivas, com visual cyberpunk e alta performance focada em conversão.";
    } else {
      aiResponse = `Entendi sobre "${message}". Como assistente da TL STUDIO, posso te ajudar a tirar dúvidas sobre nossos serviços de web, Discord, design ou edição de vídeos. Deseja falar com nossa equipe?`;
    }

    // Retorna a resposta para o front-end
    res.json({ reply: aiResponse });

  } catch (error) {
    console.error('Erro na IA:', error);
    res.status(500).json({ error: 'Erro interno ao processar a resposta da IA.' });
  }
});

// Inicialização do Servidor
app.listen(PORT, () => {
  console.log(`[TL STUDIO] Servidor back-end rodando na porta ${PORT}`);
});
