import { SignUpStoreController } from "./signup-store"
import { MissingParamsError } from "../errors/missing-params-error"

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpStoreController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        phone: 'any_phone'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamsError('nome'))
  })

  test('Should return 400 if no email is provided', () => {
    const sut = new SignUpStoreController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        phone: 'any_phone'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamsError('email'))
  })

  test('Should return 400 if no password is provided', () => {
    const sut = new SignUpStoreController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        phone: 'any_phone'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamsError('senha'))
  })

  test('Should return 400 if no phone is provided', () => {
    const sut = new SignUpStoreController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamsError('telefone'))
  })
})