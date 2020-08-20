export class MissingParamsError extends Error {
  constructor (paramName: string) {
    super(`Parâmentro faltando: ${paramName}`)
    this.name = 'MissingParamsError'
  }
}