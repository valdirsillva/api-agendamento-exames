"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamesRepositorio = void 0;
const db_1 = require("../config/db");
class ExamesRepositorio {
    async get() {
        try {
            const response = await (0, db_1.db)('exames').select('*');
            if (response.length === 0) {
                throw new Error('Nenhum resultado encontrado');
            }
            return response.map(({ id, nome, especialidade, dataCriacao }) => {
                const especialidadesArray = especialidade
                    .replace(/[{}"]/g, '') // remove chaves e aspas
                    .split(',')
                    .map((e) => e.trim());
                return {
                    id,
                    nome,
                    especialidade: especialidadesArray,
                    dataCriacao
                };
            });
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }
}
exports.ExamesRepositorio = ExamesRepositorio;
