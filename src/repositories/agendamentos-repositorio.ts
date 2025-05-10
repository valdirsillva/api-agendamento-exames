import { db } from '../config/db'
import { Agendamentos, AgendamentosParams, AgendamentosResponse } from './protocols/agendamentos'

export class AgendamentosRepositorio implements Agendamentos {
  async save(data: AgendamentosParams): Promise<boolean> {
    try {
      const rows = await db('agendamentos').insert({
        exame_id: data.exame_id,
        dataCriacao: data.dataAgendamento,
        observacao: data.observacao,
      }).returning('id')
      if (rows.length === 0) {
        throw new Error('Nao foi possivel concluir o agendamento')
      }
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  async get(): Promise<AgendamentosResponse[]> {
    try {
      const response = await db('agendamentos')
        .join('exames', 'agendamentos.exame_id', '=', 'exames.id')
        .select(
          'agendamentos.id',
          'agendamentos.observacao',
          'agendamentos.dataCriacao',
          'exames.nome as nome'
        )
      if (response.length === 0) {
        throw new Error('Nenhum resultado encontrado')
      }
      return response
    } catch (error) {
      console.log(error)
      return []
    }
  }

  async delete(agendamentoId: number): Promise<void> {
    try {
      await db('agendamentos').where('id', agendamentoId).del()
    } catch (error) {
      console.log(error)
    }
  }
}