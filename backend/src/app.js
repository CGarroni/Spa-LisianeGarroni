import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import agendamentoRoutes from './routes/agendamentoRoutes.js';

//Carrega variáveis de ambinete 
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Conectar ao MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log('✅ MongoDB conectado com sucesso!');
//   })
//   .catch((erro) => {
//     console.error('❌ Erro ao conectar ao MongoDB:', erro);
//     process.exit(1);
//   });

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