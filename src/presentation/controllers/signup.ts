import { Controllers } from "./controllers";
import { MissingParamsError } from "../errors/missing-params-error";

export class SignUpController implements Controllers {
  handle(httpRequest: any): any {

    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamsError('nome')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamsError('email')
      }
    }

  }

}