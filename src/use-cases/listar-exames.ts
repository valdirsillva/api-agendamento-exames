import { ExamesRepositorio } from "../repositories/exames-repositorio"

export class ListarExames {
  constructor(private readonly exameRepositorio: ExamesRepositorio) { }

  async execute() {
    const response = await this.exameRepositorio.get()

    if (!response) {
      throw new Error("Não foi possível listar os exames")
    }

    return response
  }
}