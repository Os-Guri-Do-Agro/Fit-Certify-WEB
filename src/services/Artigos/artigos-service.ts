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

  getAllArtigos(): Promise<any> {
    return this.handleRequest(apiClient.get("/artigo"), "ERROR");
  }

  getByArtigoId(id: string): Promise<any> {
    return this.handleRequest(apiClient.get(`/artigo/${id}`), "ERROR");
  }

  getAllPaginated(
    page: number,
    pageSize: number,
    categoriaArtigoId: string,
    isMobile: boolean
  ): Promise<any> {
    return this.handleRequest(
      apiClient.get(`/artigo/findAllPagined?page=${page}&pageSize=${pageSize}&categoriaArtigoId=${categoriaArtigoId}&isMobile=${isMobile}`),
      "ERROR"
    );
  }
}

export default new ArtigoService();
