"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarAgendamentos = void 0;
class ListarAgendamentos {
    agendamentoRepositorio;
    constructor(agendamentoRepositorio) {
        this.agendamentoRepositorio = agendamentoRepositorio;
    }
    async execute() {
        const response = await this.agendamentoRepositorio.get();
        if (!response) {
            throw new Error("Não foi possível listar os agendamentos");
        }
        return response;
    }
}
exports.ListarAgendamentos = ListarAgendamentos;
