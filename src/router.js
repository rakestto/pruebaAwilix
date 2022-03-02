import { Router } from "express";
import container from "./container";

const routerCreator = ({ userController }) => {
  const router = Router();
  router.get("/user/:userName", userController.getUserName);

  return { router };
};

export default routerCreator;
