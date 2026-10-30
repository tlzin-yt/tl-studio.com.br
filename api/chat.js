// api/chat.js
export default async function handler(req, res) {
  // Permitir conexões de fora (CORS)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Mensagem não fornecida.' });
  }

  try {
    let aiResponse = "";
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes('preço') || lowerMsg.includes('valor') || lowerMsg.includes('custa')) {
      aiResponse = "Os valores variam conforme a complexidade do projeto. Podes usar a nossa Calculadora de Orçamento interativa logo acima na página para ter uma estimativa exata!";
    } else if (lowerMsg.includes('discord') || lowerMsg.includes('servidor')) {
      aiResponse = "Na TL STUDIO estruturamos servidores de Discord profissionais com cargos, canais, sistema de tickets e automação por Webhooks.";
    } else if (lowerMsg.includes('site') || lowerMsg.includes('página') || lowerMsg.includes('web')) {
      aiResponse = "Desenvolvemos páginas web modernas, responsivas, com visual cyberpunk e alta performance focada em conversão.";
    } else {
      aiResponse = `Entendi sobre "${message}". Como assistente da TL STUDIO, posso ajudar a tirar dúvidas sobre os nossos serviços de web, Discord, design ou edição de vídeos. Desejas falar com a nossa equipa?`;
    }

    return res.status(200).json({ reply: aiResponse });

  } catch (error) {
    console.error('Erro na IA:', error);
    return res.status(500).json({ error: 'Erro interno ao processar a resposta da IA.' });
  }
}
