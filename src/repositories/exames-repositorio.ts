import { db } from '../config/db'
import { Exames, ExamesResponse } from './protocols/exames'

export class ExamesRepositorio implements Exames {
  async get(): Promise<ExamesResponse[]> {
    try {
      const response = await db('exames').select('*')
      if (response.length === 0) {
        throw new Error('Nenhum resultado encontrado')
      }
      return response.map(({ id, nome, especialidade, dataCriacao }) => {
        const especialidadesArray = especialidade
          .replace(/[{}"]/g, '') // remove chaves e aspas
          .split(',')
          .map((e: string) => e.trim())
        return {
          id,
          nome,
          especialidade: especialidadesArray,
          dataCriacao
        };
      });
    } catch (error) {
      console.log(error)
      return []
    }
  }
}