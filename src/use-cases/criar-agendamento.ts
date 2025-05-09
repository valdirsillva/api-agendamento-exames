import { AgendamentosRepositorio } from "../repositories/agendamentos-repositorio";
import { AgendamentosParams } from "../repositories/protocols/agendamentos";

export class CriarAgendamento {
  constructor(private readonly agendamentoRepositorio: AgendamentosRepositorio) { }

  async execute(data: AgendamentosParams) {
    if (!data.exameId) {
      throw new Error('O exame não foi informado')
    }

    return await this.agendamentoRepositorio.save(data)
  }
}