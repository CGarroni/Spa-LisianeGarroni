import mongoose from 'mongoose';

const agendamentoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Nome é obrigatório'],
    trim: true,
    minlength: [2, 'Nome deve ter pelo menos 2 caracteres'],
    maxlength: [100, 'Nome não pode ter mais que 100 caracteres']
  },
  email: {
    type: String, 
    required: [true, 'Email é obrigatório'],
    trim: true,
    lowercase: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email inválido']
  },
  telefone: {
    type: String,
    required: [true, 'Telefone é obrigatório'],
    trim: true,
    match: [/^(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/, 'Telefone deve estar no formato válido']
  },
  servico: {
    type: String,
    required: [true, 'Serviço é obrigatório'],
    enum: {
      values: [
        'Limpeza de Pele',
        'Hidratação Facial',
        'Peeling',
        'Massagem Relaxante',
        'Drenagem Linfática',
        'Tratamento Anti-idade',
        'Depilação',
        'Design de Sobrancelhas'
      ],
      message: 'Serviço selecionado não está disponível'
    }
  },
  dataAgendamento: {
    type: Date,
    required: [true, 'Data do agendamento é obrigatória'],
    validate: {
      validator: function(data) {
        return data > new Date();
      },
      message: 'Data do agendamento deve ser futura'
    }
  },
  horario: {
    type: String,
    required: [true, 'Horário é obrigatório'],
    enum: {
      values: [
        '09:00', '10:00', '11:00', '12:00',
        '14:00', '15:00', '16:00', '17:00', '18:00'
      ],
      message: 'Horário selecionado não está disponível'
    }
  },
  observacoes: {
    type: String,
    trim: true,
    maxlength: [500, 'Observações não podem ter mais que 500 caracteres']
  },
  status: {
    type: String,
    enum: ['pendente', 'confirmado', 'cancelado', 'concluido'],
    default: 'pendente'
  },
   tokenConfirmacao: {
    type: String,
    required: true,
    unique: true,
    sparse: true,
  index: true
  },
    confirmadoEm: {
    type: Date,
    default: null
  }
}, {
  timestamps: true,
  collection: 'agendamentos'
});

// Índices para performance
agendamentoSchema.index({ email: 1 });
agendamentoSchema.index({ dataAgendamento: 1, horario: 1 });


// Método para gerar token de confirmação
agendamentoSchema.methods.gerarTokenConfirmacao = function() {
  this.tokenConfirmacao = Math.random().toString(36).substring(2, 15) +
                          Math.random().toString(36).substring(2, 15);
  return this.tokenConfirmacao;                        
};

// Virtual para data formatada
agendamentoSchema.virtual('dataFormatada').get(function() {
  const data = new Date(this.dataAgendamento);
  // Corrigir fuso horário (-3 para Brasília)
  data.setHours(data.getHours() + 3);
  
  return data.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit', 
    year: 'numeric'
  });
});

// Garantir que virtuals sejam incluídos na serialização JSON
agendamentoSchema.set('toJSON', { virtuals: true });

export default mongoose.model('Agendamento', agendamentoSchema);