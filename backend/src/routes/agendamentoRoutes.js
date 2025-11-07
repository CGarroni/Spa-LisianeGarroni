import express from 'express';
import * as agendamentoControler from '../controllers/agendamentoController';

const routes = express.Router();

// CREATE - POST /api/agendamentos
routes.post('/', agendamentoControler.criar);

// READ - GET /api/agendametos 
routes.get('/', agendamentoControler.listar);

// READ - GET /api/agendametos/:id
routes.get('/:id', agendamentoControler.buscarPorId);

// UPDATE - PUT /api/agendametos/:id
routes.put('/:id', agendamentoControler.atualizar):


// DELETE - DELETE /api/agendametos/:id
routes.delete('/:id', agendamentoControler.deletar);

// CONFIRM - GET /api/agendametos/confirmar/:token
routes.get('/confirm/:token', agendamentoControler.confirmar);

export default routes;