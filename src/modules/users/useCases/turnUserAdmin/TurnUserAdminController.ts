import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

export class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const users = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).json(users);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}
