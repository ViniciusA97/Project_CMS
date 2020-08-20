import { Controllers } from "./controllers";
import { MissingParamsError } from "../errors/missing-params-error";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { badRequest } from "../helpers/http-helper";

export class SignUpController implements Controllers {
  handle(httpRequest: HttpRequest): HttpResponse {

    if (!httpRequest.body.name) {
      return badRequest(new MissingParamsError('nome'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamsError('email'))
    }
  }
}