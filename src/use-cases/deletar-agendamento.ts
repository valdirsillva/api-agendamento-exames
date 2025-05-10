import { AgendamentosRepositorio } from "../repositories/agendamentos-repositorio"

export class DeletarAgendamento {
  constructor(private readonly agendamentoRepositorio: AgendamentosRepositorio) { }

  async execute(agendamentoId: number) {
    if (!agendamentoId) {
      throw new Error('O Id do agendamento não foi informado')
    }

    const agendamentos = await this.agendamentoRepositorio.get()

    const item = agendamentos.filter(agendamento => agendamento.id == agendamentoId)

    if (item.length === 0) {
      throw new Error(`Nenhum agendamento encontrado para o id: ${agendamentoId}`)
    }

    await this.agendamentoRepositorio.delete(agendamentoId)
  }
}