import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

export class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.headers.user_id.toString();
    try {
      const all = this.listAllUsersUseCase.execute({ user_id });
      return response.json(all);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
