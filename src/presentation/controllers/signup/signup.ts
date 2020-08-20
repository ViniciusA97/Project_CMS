import { badRequest } from "../../helpers/http-helper";
import { Controller } from "../../protocols/controllers";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { MissingParamsError } from "../../errors/missing-params-error";
import { EmailValidator } from "../../protocols/email-validator";
import { InvalidParamError } from "../../errors/invalid-param-error";
import { ServerError } from "../../errors/server-error";

export class SignUpController implements Controller {

  private readonly emailValidator: EmailValidator

  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'role']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamsError(field))
        }
      }
    
      const { email } = httpRequest.body
      const isValid = this.emailValidator.isValid(email)
  
      if(!isValid) 
        return badRequest(new InvalidParamError('email'))
    } catch (error) {
      return {
        statusCode: 500,
        body: new ServerError()
      }
    }

    
  }
}