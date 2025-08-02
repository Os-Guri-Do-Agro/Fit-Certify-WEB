import apiClient from "../api";
import {handleError} from '../../common/error.utils'

class ArtigoService{
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

  getAllArtigos(): Promise<any>{
    return this.handleRequest(
        apiClient.get("/artigo"),
        "ERROR"
    )
  }
}

export default new ArtigoService()