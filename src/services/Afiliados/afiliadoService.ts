import apiClient from "../api";
import { handleError } from "../../common/error.utils";

class AfiliadoService {
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

  getAllAfiliados(): Promise<any> {
    return this.handleRequest(apiClient.get("/afiliado"), "Erro ao buscar afiliado");
  }

}

export default new AfiliadoService();
