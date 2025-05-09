import { Request, Response, NextFunction } from 'express'
import { ListarExames } from '../use-cases/listar-exames'

export class ExamesController {
  constructor(
    private useCaseListar: ListarExames,
  ) { }

  listarExames = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.useCaseListar.execute()

      if (!response) {
        return res.status(400).json({ message: 'Não foi possível listar os exames' })
      }

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }
}