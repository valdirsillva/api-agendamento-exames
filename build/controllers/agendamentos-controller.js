"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendamentosController = void 0;
class AgendamentosController {
    useCaseCriar;
    useCaseListar;
    useCaseDeletar;
    constructor(useCaseCriar, useCaseListar, useCaseDeletar) {
        this.useCaseCriar = useCaseCriar;
        this.useCaseListar = useCaseListar;
        this.useCaseDeletar = useCaseDeletar;
    }
    async salvarAgendamento(req, res, next) {
        const data = req.body;
        try {
            const response = await this.useCaseCriar.execute(data);
            if (!response) {
                return res.status(400).json({ message: 'Não foi possível concluir o agendamento' });
            }
            return res.status(201).json({ message: 'Agendamento ralizado com sucesso' });
        }
        catch (error) {
            next(error);
        }
    }
    async listarAgendamentos(req, res, next) {
        try {
            const response = await this.useCaseListar.execute();
            if (!response) {
                return res.status(400).json({ message: 'Não foi possível listar os agendamentos' });
            }
            return res.status(200).json(response);
        }
        catch (error) {
            next(error);
        }
    }
    removerAgendamento = async (req, res, next) => {
        const agendamentoId = req.params.exameId;
        try {
            await this.useCaseDeletar.execute(agendamentoId);
            return res.status(200).json({ message: 'Agendamento removido com sucesso' });
        }
        catch (error) {
            next(error);
            console.error(error);
        }
    };
}
exports.AgendamentosController = AgendamentosController;
