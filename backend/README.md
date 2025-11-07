# SPA Backend - Agendamentos

API REST para gerenciar agendamentos de consultas com confirmação por email.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **Joi** - Validação de dados
- **Nodemailer** - Envio de emails
- **CORS** - Comunicação Frontend-Backend

## 📂 Estrutura

src/
├── controllers/ # Lógica dos endpoints
├── models/ # Schemas MongoDB
├── routes/ # Definição de rotas
├── services/ # Serviços (email, etc)
├── validations/ # Validação com Joi
├── app.js # Configuração Express
└── server.js # Entry point


## 🔧 Instalação

npm install


## 🎯 Scripts

npm run dev # Desenvolvimento (com auto-reload)
npm start # Produção


## 📝 Endpoints

### POST /api/agendamentos
Criar novo agendamento

### GET /api/agendamentos
Listar todos os agendamentos

### GET /api/agendamentos/:id
Buscar agendamento por ID

### PUT /api/agendamentos/:id
Atualizar agendamento

### DELETE /api/agendamentos/:id
Deletar agendamento

### GET /api/agendamentos/confirmar/:token
Confirmar agendamento por email

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env`:

MONGODB_URI=mongodb://localhost:27017/spa-lisiane
PORT=5000
NODE_ENV=desenvolvimento
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha


## ✅ Status

Backend completo com:
- ✅ Models definidos
- ✅ Validação com Joi
- ✅ CRUD operations
- ✅ Email service
- ✅ CORS configurado
- ✅ Rotas definidas

## 📄 Licença

ISC
