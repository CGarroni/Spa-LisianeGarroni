import Agendamento from "../models/Agendamento.js";
import {
	criarAgendamentoSchema,
	atualizarAgendamentoSchema,
} from "../validations/agendamentoValidation.js";
import {
	enviarEmailConfirmacao,
	enviarEmailSpa,
	enviarEmailCancelamento,
} from "../services/emailServices.js";

// CREATE - Criar novo agendamento
// CREATE - Criar novo agendamento
export async function criar(req, res) {
  try {
    console.log('📥 REQ.BODY:', req.body);
    
    // 1. Valida com Joi
    const { error, value } = criarAgendamentoSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: false,
      convert: true
    });

    console.log('✅ JOI VALUE:', value);
    console.log('❌ JOI ERROR:', error);

    if (error) {
      return res.status(400).json({
        sucesso: false,
        erro: error.details[0].message,
      });
    }

    // 2. Cria instância do agendamento
    const agendamento = new Agendamento(value);
    console.log('📦 AGENDAMENTO ANTES DE SALVAR:', agendamento.toObject());


		// 3. Gera token de confirmação
		agendamento.gerarTokenConfirmacao();

		// 4. Salva no banco
		await agendamento.save();

		// 5. Envia email de confirmação
		await enviarEmailConfirmacao(agendamento);
		//      Delay de 1 segundo para evitar "Too many emails"
		await new Promise((resolve) => setTimeout(resolve, 1000));

		await enviarEmailSpa(agendamento);

		// 6. Retorna resposta
		return res.status(201).json({
			sucesso: true,
			mensagem:
				"Agendamento criado com sucesso! Verifique seu email para confirmação.",
			agendamento: {
				_id: agendamento._id,
				nome: agendamento.nome,
				email: agendamento.email,
				servico: agendamento.servico,
				dataAgendamento: agendamento.dataFormatada,
				horario: agendamento.horario,
				status: agendamento.status,
			},
		});
	} catch (error) {
		console.error("Erro ao criar agendamento:", error);
		return res.status(500).json({
			sucesso: false,
			erro: "Erro ao criar agendamento",
			detalhes: error.message,
		});
	}
}

// READ - Listar todos os agendamentos
export async function listar(req, res) {
	try {
		// Busca todos os agendamentos ordenados por data
		const agendamentos = await Agendamento.find()
			.sort({ dataAgendamento: 1 })
			.select("-tokenConfirmacao -__v");

		return res.status(200).json({
			sucesso: true,
			total: agendamentos.length,
			agendamentos,
		});
	} catch (error) {
		console.error("Erro ao listar agendamentos:", error);
		return res.status(500).json({
			sucesso: false,
			erro: "Erro ao listar agendamentos",
		});
	}
}

// READ - Buscar agendamento por ID
export async function buscarPorId(req, res) {
	try {
		const { id } = req.params;

		// Busca agendamento por ID
		const agendamento = await Agendamento.findById(id).select(
			"-tokenConfirmacao -__v"
		);

		if (!agendamento) {
			return res.status(404).json({
				sucesso: false,
				erro: "Agendamento não encontrado",
			});
		}

		return res.status(200).json({
			sucesso: true,
			agendamento,
		});
	} catch (error) {
		console.error("Erro ao buscar agendamento:", error);
		return res.status(500).json({
			sucesso: false,
			erro: "Erro ao buscar agendamento",
		});
	}
}

// UPDATE - Atualizar status do agendamento
export async function atualizar(req, res) {
	try {
		const { id } = req.params;

		// 1. Valida com Joi (schema de atualização)
		const { error, value } = atualizarAgendamentoSchema.validate(req.body);

		if (error) {
			return res.status(400).json({
				sucesso: false,
				erro: error.details[0].message,
			});
		}

		// 2. Busca agendamento
		const agendamento = await Agendamento.findById(id);

		if (!agendamento) {
			return res.status(404).json({
				sucesso: false,
				erro: "Agendamento não encontrado",
			});
		}

		// 3. Se status é cancelado, envia email
		if (value.status === "cancelado" && agendamento.status !== "cancelado") {
			await enviarEmailCancelamento(agendamento);
		}

		// 4. Se status é confirmado, atualiza confirmadoEm
		if (value.status === "confirmado" && !agendamento.confirmadoEm) {
			value.confirmadoEm = new Date();
		}

		// 5. Atualiza agendamento
		const agendamentoAtualizado = await Agendamento.findByIdAndUpdate(
			id,
			value,
			{ new: true, runValidators: true }
		).select("-tokenConfirmacao -__v");

		return res.status(200).json({
			sucesso: true,
			mensagem: "Agendamento atualizado com sucesso",
			agendamento: agendamentoAtualizado,
		});
	} catch (error) {
		console.error("Erro ao atualizar agendamento:", error);
		return res.status(500).json({
			sucesso: false,
			erro: "Erro ao atualizar agendamento",
			detalhes: error.message,
		});
	}
}

// DELETE - Deletar agendamento
export async function deletar(req, res) {
	try {
		const { id } = req.params;

		const agendamento = await Agendamento.findByIdAndDelete(id);

		if (!agendamento) {
			return res.status(404).json({
				sucesso: false,
				erro: "Agendamento não encontrado",
			});
		}

		return res.status(200).json({
			sucesso: true,
			mensagem: "Agendamento deletado com sucesso",
		});
	} catch (error) {
		console.error("Erro ao deletar agendamento:", error);
		return res.status(500).json({
			sucesso: false,
			erro: "Erro ao deletar agendamento",
		});
	}
}

// CONFIRM - Confirmar agendamento via token
export async function confirmar(req, res) {
	try {
		const { token } = req.params;

		// Busca agendamento pelo token
		const agendamento = await Agendamento.findOne({
			tokenConfirmacao: token,
			confirmadoEm: null,
		});

		if (!agendamento) {
			return res.status(404).json({
				sucesso: false,
				erro: "Token inválido ou agendamento já confirmado",
			});
		}

		// Atualiza status e confirmadoEm
		agendamento.status = "confirmado";
		agendamento.confirmadoEm = new Date();
		agendamento.tokenConfirmacao = null;
		await agendamento.save();

		return res.status(200).json({
			sucesso: true,
			mensagem: "Agendamento confirmado com sucesso!",
			agendamento: {
				_id: agendamento._id,
				nome: agendamento.nome,
				servico: agendamento.servico,
				dataAgendamento: agendamento.dataFormatada,
				horario: agendamento.horario,
				status: agendamento.status,
			},
		});
	} catch (error) {
		console.error("Erro ao confirmar agendamento:", error);
		return res.status(500).json({
			sucesso: false,
			erro: "Erro ao confirmar agendamento",
		});
	}
}
