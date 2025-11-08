import apiClient from "../api";
import { handleError } from '../../common/error.utils'

class MedicoService {
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

  getMeditoById(id: string): Promise<any> {
    return this.handleRequest(
      apiClient.get(`/medico/${id}`),
      `Erro ao buscar medico ${id}`
    )
  }


}

export default new MedicoService()
