"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const agendamentos_controller_1 = require("../controllers/agendamentos-controller");
const exames_controller_1 = require("../controllers/exames-controller");
const agendamento_factorie_1 = require("../factories/agendamento-factorie");
const exame_factorie_1 = require("../factories/exame-factorie");
const router = express_1.default.Router();
exports.router = router;
const agendamentoUseCases = (0, agendamento_factorie_1.getAgendamentoUseCases)();
const exameUseCases = (0, exame_factorie_1.getExameUseCases)();
const exameController = new exames_controller_1.ExamesController(exameUseCases.useCaseListar);
const agendamentoController = new agendamentos_controller_1.AgendamentosController(agendamentoUseCases.useCaseCriar, agendamentoUseCases.useCaseListar, agendamentoUseCases.useCaseDeletar);
router.get('/exames', async (req, res, next) => {
    try {
        await exameController.listarExames(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.post('/agendamentos', async (req, res, next) => {
    try {
        await agendamentoController.salvarAgendamento(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.get('/agendamentos', async (req, res, next) => {
    try {
        await agendamentoController.listarAgendamentos(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
router.delete('/agendamentos/:exameId', async (req, res, next) => {
    try {
        await agendamentoController.removerAgendamento(req, res, next);
    }
    catch (error) {
        next(error);
    }
});
