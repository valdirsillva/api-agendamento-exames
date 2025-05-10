"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgendamentoUseCases = void 0;
const agendamentos_repositorio_1 = require("../repositories/agendamentos-repositorio");
const criar_agendamento_1 = require("../use-cases/criar-agendamento");
const deletar_agendamento_1 = require("../use-cases/deletar-agendamento");
const listar_agendamentos_1 = require("../use-cases/listar-agendamentos");
const agendamentoRepositorio = new agendamentos_repositorio_1.AgendamentosRepositorio();
const useCaseCriar = new criar_agendamento_1.CriarAgendamento(agendamentoRepositorio);
const useCaseListar = new listar_agendamentos_1.ListarAgendamentos(agendamentoRepositorio);
const useCaseDeletar = new deletar_agendamento_1.DeletarAgendamento(agendamentoRepositorio);
const getAgendamentoUseCases = () => {
    return {
        useCaseCriar,
        useCaseListar,
        useCaseDeletar,
    };
};
exports.getAgendamentoUseCases = getAgendamentoUseCases;
