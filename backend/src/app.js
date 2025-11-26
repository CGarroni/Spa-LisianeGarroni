import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import agendamentoRoutes from './routes/agendamentoRoutes.js';

//Carrega variáveis de ambiente 
dotenv.config();

const app = express();

// Middleware - ORDEM CORRETA
app.use(cors({
  origin: [
    'https://spalisianegarroni.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ✅ ADICIONE ISTO (estava faltando!)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB conectado com sucesso!');
  })
  .catch((erro) => {
    console.error('❌ Erro ao conectar ao MongoDB:', erro);
    process.exit(1);
  });

// Rotas
app.use('/api/agendamentos', agendamentoRoutes);

// health Check 
app.get('/api/health', (req, res) => {
  res.json({
    sucesso: true,
    mensagem: 'Servidor rodando com sucesso!'
  });
});

export default app;
