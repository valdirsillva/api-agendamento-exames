import express, { Request, Response, NextFunction } from 'express'
import { AgendamentosController } from '../controllers/agendamentos-controller'
import { ExamesController } from '../controllers/exames-controller'
import { getAgendamentoUseCases } from '../factories/agendamento-factorie'
import { getExameUseCases } from '../factories/exame-factorie'

const router = express.Router()

const agendamentoUseCases = getAgendamentoUseCases()
const exameUseCases = getExameUseCases()

const exameController = new ExamesController(
  exameUseCases.useCaseListar
)

const agendamentoController = new AgendamentosController(
  agendamentoUseCases.useCaseCriar,
  agendamentoUseCases.useCaseListar,
  agendamentoUseCases.useCaseDeletar
)

router.get('/exames', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await exameController.listarExames(req, res, next)
  } catch (error) {
    next(error)
  }
})

router.post('/agendamentos', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await agendamentoController.salvarAgendamento(req, res, next)
  } catch (error) {
    next(error)
  }
})

router.get('/agendamentos', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await agendamentoController.listarAgendamentos(req, res, next)
  } catch (error) {
    next(error)
  }
})

router.delete('/agendamentos/:exameId', async (req: Request<{ exameId: number }>, res: Response, next: NextFunction) => {
  try {
    await agendamentoController.removerAgendamento(req, res, next)
  } catch (error) {
    next(error)
  }
})

export { router }