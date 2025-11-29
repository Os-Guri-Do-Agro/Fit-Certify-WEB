import apiClient from "../api";
import { handleError } from "../../common/error.utils";

class ContatoService {
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

  enviarEmail(data: any): Promise<any> {
    return this.handleRequest(
        apiClient.post('/user/fale-conosco', data),
        'ERROR - Erro ao enviar email')
  }
}

export default new ContatoService();
