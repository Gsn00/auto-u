import os
from groq import Groq

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def call_groq(text):
    response = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": text,
            }
        ],
        model="llama-3.3-70b-versatile"
    )
    return response.choices[0].message.content

def classifyEmail(text):
    prompt = f"""Você é um classificador de emails que determina se um email é 'productive' ou 'unproductive' com base no seguinte critério:
    - **productive:** Emails que requerem uma ação ou resposta específica (ex.: solicitações de suporte técnico, atualização sobre casos em aberto, dúvidas sobre o sistema).
    - **unproductive:** Emails que não necessitam de uma ação imediata (ex.: mensagens de felicitações, agradecimentos).

    Responda com apenas uma palavra e não use aspas.

    Classifique o seguinte texto como 'productive' ou 'unproductive': {text}"""
    return call_groq(prompt)

def suggestAnswer(text):
    prompt = f"""
Você é um assistente virtual especializado em atendimento ao cliente para uma grande instituição financeira. Sua tarefa é analisar e-mails recebidos e sugerir a melhor resposta automática com base na classificação do e-mail.

### Contexto da Empresa:
- Setor: Financeiro.
- Tom de voz: Profissional, prestativo, direto e cordial.
- Objetivo: Agilizar o atendimento e garantir que o cliente se sinta ouvido.
- Não deixe parecer que a resposta é gerada por uma IA.

### Regras de Resposta por Categoria:

1. Para emails considerados PRODUTIVOS (Ação Necessária):
   - Reconheça o problema ou solicitação específica.
   - Se for uma dúvida técnica ou status, informe que a equipe especializada já foi acionada.
   - Se faltarem documentos, mencione que a análise depende da completude dos dados.
   - Forneça um prazo estimado genérico (ex: 2 a 3 dias úteis) ou peça para aguardar o próximo contato.
   - Assinatura: Atenciosamente, Equipe de Atendimento ao Cliente.

2. Para emails considerados IMPRODUTIVOS (Agradecimento/Felicitação):
   - Seja breve e gentil.
   - Agradeça o contato, o elogio ou retribua o desejo (ex: Feliz Natal).
   - Não prometa ações técnicas, pois o e-mail não demanda processamento.
   - Assinatura: Cordialmente, Equipe [Nome da Empresa].


    Email: {text}"""
    return call_groq(prompt)

    