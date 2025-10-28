import apiClient from "../api";
import { handleError } from '../../common/error.utils'

class CtaService {
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

  createCta(data: any): Promise<any> {
    return this.handleRequest(
      apiClient.post(`/cta-promocional`, data, {
      }),
      'Failed to update cupom'
    )
  }

  updateCta(id: string): Promise<any> {
    return this.handleRequest(
      apiClient.put(`/cta-promocional/${id}`, {
      }),
      'Failed to update cupom'
    )
  }
  

  
}

export default new CtaService()