import { asClass, asFunction, asValue, createContainer } from "awilix";
import routerCreator from "./router";
import server from "./server";
import userRepository from "./userRepository";
import createUserService from "./userService";
import userController from "./userController";
const container = createContainer();

container.register({
  userController: asFunction(userController).singleton(),
  userService: asFunction(createUserService).singleton(),
  userRepository: asFunction(userRepository).scoped(),
  routerCreator: asFunction(routerCreator).singleton(),
  server: asFunction(server).singleton(),
  port: asValue("4000"),
});

export default container;
