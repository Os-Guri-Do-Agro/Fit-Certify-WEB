import apiClient from "../api";
import { handleError } from "../../common/error.utils";

class ArtigoService {
  private async handleRequest<T>(
    request: Promise<{ data: T }>,
    errorMessage: string
  ): Promise<T> {
    try {
      const { data } = await request;
      return data;
    } catch (error: any) {
      handleError(`${errorMessage}: ${error.message}`, error);
      throw error;
    }
  }

  getAllCategoriaArtigos(): Promise<any> {
    return this.handleRequest(apiClient.get("/categoria-artigo"), "Erro ao buscar categoria artigo");
  }
  getAllArtigos(): Promise<any> {
    return this.handleRequest(apiClient.get("/artigo"), "Erro ao buscar artigo");
  }

  getByArtigoId(id: string): Promise<any> {
    return this.handleRequest(apiClient.get(`/artigo/${id}`), "Erro ao buscar artigo por id");
  }

  getAllPaginated(
    page: number,
    pageSize: number,
    categoriaArtigoId?: string,
    isMobile?: boolean,
    isDesktop?: boolean
  ): Promise<any> {
    const params: Record<string, any> = {
      page,
      pageSize,
    };

    if (categoriaArtigoId) params.categoriaArtigoId = categoriaArtigoId;
    if (isMobile !== undefined) params.isMobile = isMobile;
    if (isDesktop !== undefined) params.isDesktop = isDesktop;

    return this.handleRequest(
      apiClient.get(`/artigo/findAllPagined`, { params }),
      "Erro ao buscar artigos paginados"
    );
  }
}

export default new ArtigoService();
