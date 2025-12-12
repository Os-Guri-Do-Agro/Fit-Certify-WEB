import apiClient from "../api";
import { handleError } from "../../common/error.utils";

class EmpresaService {
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

  getAllEmpresas(): Promise<any> {
    return this.handleRequest(
      apiClient.get("/empresa"),
      "Erro ao buscar todas as empresas"
    );
  }
}

export default new EmpresaService();
