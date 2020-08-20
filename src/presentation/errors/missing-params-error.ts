export class MissingParamsError extends Error {
  constructor (paramName: string) {
    super(`Missing parameter: ${paramName}`)
    this.name = 'MissingParamsError'
  }
}