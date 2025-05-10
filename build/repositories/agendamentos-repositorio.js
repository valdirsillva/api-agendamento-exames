"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendamentosRepositorio = void 0;
const db_1 = require("../config/db");
class AgendamentosRepositorio {
    async save(data) {
        console.log(data);
        try {
            const rows = await (0, db_1.db)('agendamentos').insert({
                exame_id: data.exame_id,
                dataCriacao: data.dataAgendamento,
                observacao: data.observacao,
            }).returning('id');
            if (rows.length === 0) {
                throw new Error('Nao foi possivel concluir o agendamento');
            }
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    async get() {
        try {
            const response = await (0, db_1.db)('agendamentos')
                .join('exames', 'agendamentos.exame_id', '=', 'exames.id')
                .select('agendamentos.id', 'agendamentos.observacao', 'agendamentos.dataCriacao', 'exames.nome as nome');
            if (response.length === 0) {
                throw new Error('Nenhum resultado encontrado');
            }
            return response;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }
    async delete(agendamentoId) {
        try {
            await (0, db_1.db)('agendamentos').where('id', agendamentoId).del();
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.AgendamentosRepositorio = AgendamentosRepositorio;
