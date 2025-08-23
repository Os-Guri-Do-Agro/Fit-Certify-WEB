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


    getAllCategoria(): Promise<any>{
    return this.handleRequest(
        apiClient.get("/categoria-produto"),
        "`Erro ao buscar categoria produto"
    )
  }

getAllPaginated(
  page: number,
  pageSize: number,
  categoriaProdutoId?: string,
  condicaoEspecial?: boolean | null,
  preco?: number
): Promise<any> {
  const params: Record<string, any> = {
    page,
    pageSize,
  };

  if (categoriaProdutoId) params.categoriaProdutoId = categoriaProdutoId;
  if (condicaoEspecial !== null && condicaoEspecial !== undefined) {
    params.condicaoEspecial = condicaoEspecial;
  }
  if (preco !== undefined) params.preco = preco;

  return this.handleRequest(
    apiClient.get(`/produto/findAllPagined`, { params }),
    "Erro ao buscar produtos paginados"
  );
}


}

export default new ProdutosServices()
