export class ServerError extends Error {
  constructor() {
    super('Unexpected error')
    this.name = 'ServerError'
  }
}