import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListAllUsersController } from "./ListAllUsersController";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

const usersRepository = UsersRepository.getInstance();
const listAllUsersUseCase = new ListAllUsersUseCase(usersRepository);

export const listAllUsersController = new ListAllUsersController(
  listAllUsersUseCase
);
