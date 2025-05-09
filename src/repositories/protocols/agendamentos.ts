export interface AgendamentosParams {
  exame_id: number
  observacao: string
  dataAgendamento: string
}

export interface AgendamentosResponse extends AgendamentosParams {
  id: number
}

export interface Agendamentos {
  save: (data: AgendamentosParams) => Promise<boolean>
  get: () => Promise<AgendamentosResponse[]>
  delete: (exameId: number) => Promise<void>
}