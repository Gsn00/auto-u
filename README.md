# Classificador Inteligente de E-mails com IA

## Visão Geral do Projeto

O AI Email Classifier é uma solução digital inovadora desenvolvida para otimizar a gestão de e-mails em ambientes corporativos, especialmente no setor financeiro. Utilizando inteligência artificial, a aplicação automatiza a classificação de e-mails em categorias **Produtivo** ou **Improdutivo** e sugere respostas automáticas, liberando a equipe de tarefas manuais repetitivas e permitindo que se concentrem em atividades de maior valor.

Este projeto foi desenvolvido como parte de um desafio técnico, com foco em demonstrar a integração de IA em uma aplicação web funcional e com uma experiência de usuário intuitiva.

## Contexto do Desafio

Grandes empresas do setor financeiro lidam com um volume massivo de e-mails diariamente, que variam desde solicitações importantes até mensagens de baixo valor. A triagem manual desses e-mails consome tempo valioso da equipe. O Auto-U surge como uma ferramenta para automatizar esse processo, garantindo que e-mails produtivos recebam atenção prioritária e que respostas rápidas sejam geradas, melhorando a eficiência operacional.

## Funcionalidades

- **Upload de E-mails:** Permite o upload de arquivos de e-mail nos formatos `.txt` e `.pdf`.

- **Inserção de Texto Direta:** Opção para colar o conteúdo do e-mail diretamente na interface.

- **Classificação Inteligente:** Utiliza modelos de IA para categorizar e-mails como **Produtivo** ou **Improdutivo**.

- **Sugestão de Respostas:** Gera respostas automáticas contextuais baseadas na classificação do e-mail.

- **Interface Intuitiva:** Design limpo e focado na usabilidade para uma experiência de usuário fluida.

## Tecnologias Utilizadas

### Frontend

- **HTML/CSS/JavaScript:** Para a estrutura, estilização e interatividade da interface web.

### Backend

- **Python:** Linguagem principal de desenvolvimento.

- **Flask:** Microframework web para construção da API.

- **PyPDF2:** Biblioteca para extração de texto de arquivos PDF.

- **Groq API:** Utilizada para classificação de e-mails e geração de respostas automáticas via modelos de linguagem (LLMs).

- **Dotenv:** Para gerenciamento de variáveis de ambiente.

## Estrutura do Projeto

```
auto-u/
├── .vscode/                 # Configurações do VS Code
├── services/                # Módulos de serviço (ex: groq_service, nlp_service)
│   ├── __init__.py
│   ├── groq_service.py      # Integração com a API Groq
│   └── nlp_service.py       # Funções de pré-processamento de texto
├── static/                  # Arquivos estáticos (CSS, JS)
│   ├── css/
│   └── js/
├── templates/               # Arquivos HTML da interface
│   └── home.html
├── .gitignore               # Arquivos e diretórios a serem ignorados pelo Git
├── main.py                  # Ponto de entrada da aplicação Flask
├── requirements.txt         # Dependências do Python
└── routes.py                # Definição das rotas da aplicação
```

## Instalação e Execução Local

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Gsn00/auto-u.git
   cd auto-u
   ```

1. **Crie e ative um ambiente virtual (recomendado ):**

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # No Windows: .\venv\Scripts\activate
   ```

1. **Instale as dependências:**

   ```bash
   pip install -r requirements.txt
   ```

1. **Configure suas variáveis de ambiente:**Crie um arquivo `.env` na raiz do projeto com suas chaves de API. Exemplo:

   ```
   GROQ_API_KEY=sua_chave_api_groq_aqui
   ```

1. **Execute a aplicação Flask:**

   ```bash
   python main.py
   ```

   A aplicação estará disponível em `http://127.0.0.1:5000` (ou outra porta, dependendo da sua configuração ).

## Uso da Aplicação

1. **Acesse a Interface:** Abra seu navegador e navegue até o endereço local da aplicação.

1. **Insira o E-mail:** Você pode selecionar um arquivo `.txt` ou `.pdf` na área indicada, ou colar o conteúdo do e-mail diretamente na caixa de texto.

1. **Classifique:** Clique no botão "Enviar".

1. **Visualize os Resultados:** A aplicação exibirá a categoria do e-mail (Produtivo/Improdutivo) e uma resposta automática sugerida.

## Design e Experiência do Usuário

A interface do AI Email Classifier foi projetada com base nos princípios do **Calm Design**, visando uma experiência de usuário tranquila, eficiente e confiável. Os principais aspectos incluem:

- **Tipografia:** Utilização da fonte **Inter** (ou similar como Roboto), escolhida por sua alta legibilidade em telas digitais e sua estética moderna e neutra.

- **Layout Limpo:** Organização visual clara com amplo uso de espaços em branco, minimizando a sobrecarga cognitiva e focando na funcionalidade principal.

- **Micro-interações:** Feedback visual sutil para ações do usuário (ex: carregamento, sucesso da classificação) e um botão "Copiar" para a resposta sugerida, melhorando a usabilidade.

## Deploy na Nuvem

Para acessar a aplicação online, o projeto foi hospedado na plataforma Render, e pode ser acessado através do link: <br>https://auto-u.onrender.com/

