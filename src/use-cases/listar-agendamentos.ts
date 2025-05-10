import { AgendamentosRepositorio } from "../repositories/agendamentos-repositorio"

export class ListarAgendamentos {
  constructor(private readonly agendamentoRepositorio: AgendamentosRepositorio) { }

  async execute() {
    const response = await this.agendamentoRepositorio.get()

    if (!response) {
      throw new Error("Não foi possível listar os agendamentos")
    }

    return response
  }
}