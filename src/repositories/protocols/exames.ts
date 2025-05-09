export interface ExamesResponse {
  id: number
  nome: string
  especialidade: string
  dataCriacao: Date
}

export interface Exames {
  get: () => Promise<ExamesResponse[]>
}