import { Controller } from "../../protocols/controllers";
import { MissingParamsError } from "../../errors/missing-params-error";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { badRequest } from "../../helpers/http-helper";

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {

    const requiredFields = ['name', 'email', 'password', 'role']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamsError(field))
      }
    }
  }
}