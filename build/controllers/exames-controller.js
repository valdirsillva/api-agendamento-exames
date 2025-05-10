"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamesController = void 0;
class ExamesController {
    useCaseListar;
    constructor(useCaseListar) {
        this.useCaseListar = useCaseListar;
    }
    listarExames = async (req, res, next) => {
        try {
            const response = await this.useCaseListar.execute();
            if (!response) {
                return res.status(400).json({ message: 'Não foi possível listar os exames' });
            }
            return res.status(200).json(response);
        }
        catch (error) {
            next(error);
        }
    };
}
exports.ExamesController = ExamesController;
