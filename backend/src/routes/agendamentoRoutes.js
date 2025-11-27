import express from 'express';
import * as agendamentoController from '../controllers/agendamentoController.js';

const routes = express.Router();

// CREATE - POST /api/agendamentos
routes.post('/', agendamentoController.criar);

// READ - GET /api/agendamentos
routes.get('/', agendamentoController.listar);

// READ - GET /api/agendamentos/confirmar/:token
routes.post('/confirmar/:token', agendamentoController.confirmar);

// READ - GET /api/agendamentos/:id
routes.get('/:id', agendamentoController.buscarPorId);

// UPDATE - PUT /api/agendamentos/:id
routes.put('/:id', agendamentoController.atualizar);

// DELETE - DELETE /api/agendamentos/:id
routes.delete('/:id', agendamentoController.deletar);

export default routes;
