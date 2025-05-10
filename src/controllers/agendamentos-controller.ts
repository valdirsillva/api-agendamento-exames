import { Request, Response, NextFunction } from 'express'
import { CriarAgendamento } from '../use-cases/criar-agendamento'
import { ListarAgendamentos } from '../use-cases/listar-agendamentos'
import { DeletarAgendamento } from '../use-cases/deletar-agendamento'

export interface RequestParams {
  exameId: number
}

export class AgendamentosController {
  private useCaseCriar: CriarAgendamento
  private useCaseListar: ListarAgendamentos
  private useCaseDeletar: DeletarAgendamento

  constructor(useCaseCriar: CriarAgendamento, useCaseListar: ListarAgendamentos, useCaseDeletar: DeletarAgendamento) {
    this.useCaseCriar = useCaseCriar
    this.useCaseListar = useCaseListar
    this.useCaseDeletar = useCaseDeletar
  }

  public async salvarAgendamento(req: Request, res: Response, next: NextFunction) {
    const data = req.body

    try {
      const response = await this.useCaseCriar.execute(data)

      if (!response) {
        return res.status(400).json({ message: 'Não foi possível concluir o agendamento' })
      }

      return res.status(201).json({ message: 'Agendamento ralizado com sucesso' })
    } catch (error) {
      next(error)
    }
  }

  public async listarAgendamentos(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.useCaseListar.execute()

      if (!response) {
        return res.status(400).json({ message: 'Não foi possível listar os agendamentos' })
      }

      return res.status(200).json(response)
    } catch (error) {
      next(error)
    }
  }

  public async removerAgendamento(req: Request<{ exameId: number }>, res: Response, next: NextFunction) {
    const agendamentoId: number = req.params.exameId

    try {
      await this.useCaseDeletar.execute(agendamentoId)

      return res.status(200).json({ message: 'Agendamento removido com sucesso' })
    } catch (error) {
      next(error)
      console.error(error)
    }
  }
}



