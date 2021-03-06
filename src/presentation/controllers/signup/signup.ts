import { badRequest, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/controllers";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { InvalidParamError, MissingParamsError } from "../../errors";
import { EmailValidator } from "../../protocols/email-validator";

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
      return serverError()
    }

    
  }
}