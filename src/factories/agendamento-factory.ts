import { AgendamentosRepositorio } from "../repositories/agendamentos-repositorio"
import { CriarAgendamento } from "../use-cases/criar-agendamento"
import { DeletarAgendamento } from "../use-cases/deletar-agendamento"
import { ListarAgendamentos } from "../use-cases/listar-agendamentos"

const agendamentoRepositorio = new AgendamentosRepositorio()
const useCaseCriar = new CriarAgendamento(agendamentoRepositorio)
const useCaseListar = new ListarAgendamentos(agendamentoRepositorio)
const useCaseDeletar = new DeletarAgendamento(agendamentoRepositorio)

export const getAgendamentoUseCases = () => {
  return {
    useCaseCriar,
    useCaseListar,
    useCaseDeletar,
  }
}
