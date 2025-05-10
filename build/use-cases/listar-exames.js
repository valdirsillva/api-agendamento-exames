"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListarExames = void 0;
class ListarExames {
    exameRepositorio;
    constructor(exameRepositorio) {
        this.exameRepositorio = exameRepositorio;
    }
    async execute() {
        const response = await this.exameRepositorio.get();
        if (!response) {
            throw new Error("Não foi possível listar os exames");
        }
        return response;
    }
}
exports.ListarExames = ListarExames;
