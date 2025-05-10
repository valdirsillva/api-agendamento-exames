import { ExamesRepositorio } from "../repositories/exames-repositorio"
import { ListarExames } from "../use-cases/listar-exames"

const exameRepositorio = new ExamesRepositorio()
const useCaseListar = new ListarExames(exameRepositorio)

export const getExameUseCases = () => {
	return {
		useCaseListar
	}
}