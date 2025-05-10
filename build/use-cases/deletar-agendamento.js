"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletarAgendamento = void 0;
class DeletarAgendamento {
    agendamentoRepositorio;
    constructor(agendamentoRepositorio) {
        this.agendamentoRepositorio = agendamentoRepositorio;
    }
    async execute(agendamentoId) {
        if (!agendamentoId) {
            throw new Error('O Id do agendamento não foi informado');
        }
        const agendamentos = await this.agendamentoRepositorio.get();
        const item = agendamentos.filter(agendamento => agendamento.id == agendamentoId);
        if (item.length === 0) {
            throw new Error(`Nenhum agendamento encontrado para o id: ${agendamentoId}`);
        }
        await this.agendamentoRepositorio.delete(agendamentoId);
    }
}
exports.DeletarAgendamento = DeletarAgendamento;
