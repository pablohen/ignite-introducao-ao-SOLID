import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { TurnUserAdminController } from "./TurnUserAdminController";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

const usersRepository = UsersRepository.getInstance();
const turnUserAdminUseCase = new TurnUserAdminUseCase(usersRepository);

export const turnUserAdminController = new TurnUserAdminController(
  turnUserAdminUseCase
);
