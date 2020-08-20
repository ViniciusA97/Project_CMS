import { HttpRequest, HttpResponse } from "../protocols/http";

export interface Controllers {
  handle(httpRequest: HttpRequest): HttpResponse
}