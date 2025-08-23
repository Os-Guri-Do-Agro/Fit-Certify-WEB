import apiClient from "../api";
import { handleError } from '../../common/error.utils'

class EventosService {
  private async handleRequest<T>(
    request: Promise<{ data: T }>,
    errorMessage: string
  ): Promise<T> {
    try {
      const { data } = await request
      return data
    } catch (error: any) {
      handleError(`${errorMessage}: ${error.message}`, error)
      throw error
    }
  }

  getAllEventos(): Promise<any> {
    return this.handleRequest(
      apiClient.get("/evento"),
      "ERROR"
    )
  }

  getByEventoId(id: string): Promise<any> {
    return this.handleRequest(
      apiClient.get(`/evento/${id}`),
      "ERROR"
    )
  }

  getAllTipoEventos(): Promise<any> {
    return this.handleRequest(
      apiClient.get("/tipo-evento"),
      "Erro ao buscar tipos de prova"
    )
  }

  getAllPaginated(
    page: number,
    pageSize: number,
    tipoEventoId?: string,
    localidade?: string,
    mes?: string
  ): Promise<any> {
    return this.handleRequest(
      apiClient.get("/evento/findAllPagined", {
        params: { page, pageSize, tipoEventoId, localidade, mes }
      }),
      "Erro ao buscar eventos paginados"
    )
  }
}

export default new EventosService()