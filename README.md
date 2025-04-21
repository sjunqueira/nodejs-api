
# Node.js API (Vanilla)

Repositório de estudo focado na criação de APIs REST utilizando **Node.js puro**, sem frameworks ou bibliotecas externas.  
O objetivo é compreender profundamente o funcionamento das rotas HTTP, manipulação de requisições e respostas, e a estrutura básica de um servidor HTTP com Node.js nativo.

## 📁 Estrutura do Projeto

```
nodejs-api/
├── src/
│   ├── server.js
│   ├── routes.js
│   └── database.js
├── streams/
│   └── [exemplos de manipulação de streams]
├── .gitignore
└── package.json
```

## 🚀 Funcionalidades

- Criação de servidor HTTP com `http.createServer`
- Roteamento manual baseado em métodos HTTP e URLs
- Manipulação de parâmetros de rota e query strings
- Parsing de payloads JSON sem bibliotecas externas
- Implementação de métodos HTTP: `GET`, `POST`, `PUT`, `DELETE`
- Exemplos de uso de streams com Node.js nativo

## ⚙️ Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/sjunqueira/nodejs-api.git
   cd nodejs-api
   ```

2. Instale as dependências (se houver):
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm run dev
   ```

4. Acesse a API em:
   ```
   http://localhost:3333/[endpoint]
   ```

## 📌 Endpoints Disponíveis

- `GET /users` – Lista todos os usuários
- `POST /users` – Cria um novo usuário
- `PUT /users/:id` – Atualiza um usuário existente
- `DELETE /users/:id` – Remove um usuário
- `GET /users?search=termo` – Filtra usuários por nome ou email

## 🧪 Exemplos de Uso de Streams

O diretório `streams/` contém exemplos e estudos de manipulação de streams em Node.js, como:

- Leitura e escrita de arquivos
- Transformações de dados em tempo real
- Simulações de upload e download

## 🧠 Objetivo do Projeto

Este projeto visa proporcionar uma compreensão sólida dos fundamentos do Node.js, sem abstrações de frameworks, permitindo que o desenvolvedor tenha controle total sobre o fluxo de requisições e respostas, além de entender profundamente como o Node.js lida com operações assíncronas e manipulação de dados. O projeto foi realizado com base nas aulas do primeiro módulo do curso de NodeJs da Rocketseat.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
