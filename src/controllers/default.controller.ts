import { Request, Response } from "express";
import { route, GET } from "awilix-express";

@route("/")
export class DefaultController {
  /**
   *
   */
  constructor() {}
  @GET()
  async index(req: Request, res: Response) {
    res.send("hello from /");
  }
}
