"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriarAgendamento = void 0;
class CriarAgendamento {
    agendamentoRepositorio;
    constructor(agendamentoRepositorio) {
        this.agendamentoRepositorio = agendamentoRepositorio;
    }
    async execute(data) {
        if (!data.exame_id) {
            throw new Error('O exame não foi informado');
        }
        return await this.agendamentoRepositorio.save(data);
    }
}
exports.CriarAgendamento = CriarAgendamento;
