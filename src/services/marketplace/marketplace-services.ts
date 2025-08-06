import apiClient from "../api";
import {handleError} from '../../common/error.utils'

class ProdutosServices{
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

  getAllProdutos(): Promise<any>{
    return this.handleRequest(
        apiClient.get("/produto"),
        "ERROR"
    )
  }

  getProdutoById(id: string): Promise<any>{
    return this.handleRequest(
      apiClient.get(`/produto/${id}`),
      `ERROR ao buscar produto${id}`
    )
  }
}

export default new ProdutosServices()