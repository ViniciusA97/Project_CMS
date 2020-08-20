import { Controller } from "../protocols/controllers";
import { MissingParamsError } from "../errors/missing-params-error";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { badRequest } from "../helpers/http-helper";

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const {name, email, password, role} = httpRequest.body

    if (!name) {
      return badRequest(new MissingParamsError('nome'))
    }
    if (!email) {
      return badRequest(new MissingParamsError('email'))
    }
    if (!password) {
      return badRequest(new MissingParamsError('senha'))
    }
    if (!role) {
      return badRequest(new MissingParamsError('role'))
    }
  }
}