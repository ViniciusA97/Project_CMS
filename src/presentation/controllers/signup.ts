import { Controllers } from "./controllers";

export class SignUpController implements Controllers {
  handle(httpRequest: any): any {
    return {
      statusCode: 400,
      body: new Error('Parâmetro faltando: nome')
    }
  }

}