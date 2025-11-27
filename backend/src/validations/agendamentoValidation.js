import Joi from "joi";

export const criarAgendamentoSchema = Joi.object({
  nome: Joi.string()
    .required()
    .min(2)
    .max(100)
    .trim()
    .messages({
      "string.empty": "Nome é obrigatório",
      "string.min": "Nome deve ter pelo menos 2 caracteres",
      "string.max": "Nome não pode ter mais que 100 caracteres",
    }),

  email: Joi.string()
    .email()
    .required()
    .lowercase()
    .messages({
      'string.email': 'Email inválido',
      'string.empty': 'Email é obrigatório'
    }),

  telefone: Joi.string()
    .pattern(/^(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/)
    .required()
    .messages({
      'string.pattern.base': 'Telefone deve estar no formato (xx) xxxxx-xxxx',
      'string.empty': 'Telefone é obrigatório'
    }),

  servico: Joi.string()
    .valid(
      'Massagem Relaxante',
      'Drenagem Linfática Tradicional',
      'Reiki',
      'Miracle Touch',
      'Drenagem Linfática Renata França',
      'Miracle Face',
      'Day Spa',
      'Spa Renata França',
      'Seu Momento Miracle'
    )
    .required()
    .messages({
      'any.only': 'Serviço selecionado não está disponível',
      'string.empty': 'Serviço é obrigatório'
    }),

  dataAgendamento: Joi.date()
    .greater('now')
    .required()
    .messages({
      'date.greater': 'Data do agendamento deve ser de pelo menos 24 horas de antecedência',
      'any.required': 'Data do agendamento é obrigatória'
    }),
    
  horario: Joi.string()
    .valid(
      '08:00', '09:00', '10:00', '11:00', '12:00',
      '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
      '09:00-sab', '10:00-sab', '11:00-sab', '12:00-sab'
    )
    .required()
    .messages({
      'any.only': 'Horário selecionado não está disponível',
      'string.empty': 'Horário é obrigatório'
    }),
  
  observacoes: Joi.string()
    .max(500)
    .trim()
    .allow('')
    .messages({
      'string.max': 'Observações não podem ter mais que 500 caracteres'
    }) 
});

export const atualizarAgendamentoSchema = Joi.object({
  status: Joi.string()
    .valid('pendente', 'confirmado', 'cancelado', 'concluido')
    .required()
    .messages({
      'any.only': 'Status inválido'
    }),

  observacoes: Joi.string()
    .max(500)
    .trim()
    .allow('')
    .messages({
      'string.max': 'Observações não podem ter mais que 500 caracteres'
    })
}).min(1);
