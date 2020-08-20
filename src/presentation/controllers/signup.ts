import { Controllers } from "./controllers";
import { MissingParamsError } from "../errors/missing-params-error";
import { HttpRequest, HttpResponse } from "../protocols/http";

export class SignUpController implements Controllers {
  handle(httpRequest: HttpRequest): HttpResponse {

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