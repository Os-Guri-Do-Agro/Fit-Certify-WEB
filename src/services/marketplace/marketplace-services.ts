import apiClient from "../api";
import { handleError } from '../../common/error.utils'

class ProdutosServices {
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

  getAllProdutos(): Promise<any> {
    return this.handleRequest(
      apiClient.get("/produto"),
      "Erro ao buscar todos os produtos"
    )
  }

  getProdutoById(id: string): Promise<any> {
    return this.handleRequest(
      apiClient.get(`/produto/${id}`),
      `Erro ao buscar produto ${id}`
    )
  }

  getAllPaginated(
    page: number,
    pageSize: number,
    categoriaProdutoId: string,
    condicaoEspecial: boolean
  ): Promise<any> {
    return this.handleRequest(
      apiClient.get(`/produto/findAllPagined?page=${page}&pageSize=${pageSize}&categoriaProdutoId=${categoriaProdutoId}&condicaoEspecial=${condicaoEspecial}`),
      "Erro ao buscar produtos paginados"
    )
  }
}

export default new ProdutosServices()
