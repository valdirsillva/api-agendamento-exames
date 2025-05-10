"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExameUseCases = void 0;
const exames_repositorio_1 = require("../repositories/exames-repositorio");
const listar_exames_1 = require("../use-cases/listar-exames");
const exameRepositorio = new exames_repositorio_1.ExamesRepositorio();
const useCaseListar = new listar_exames_1.ListarExames(exameRepositorio);
const getExameUseCases = () => {
    return {
        useCaseListar
    };
};
exports.getExameUseCases = getExameUseCases;
