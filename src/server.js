import { asValue } from "awilix";
import express, { Router, Request } from "express";
import expressStatusMonitor from "express-status-monitor";
import container from "./container";
const server = ({ port, routerCreator }) => {
  const app = express();
  const router = routerCreator.router;
  let counter = 1;

  router.get("/health", (req, res) => {
    res.send({
      status: "ok",
    });
  });

  app.use(expressStatusMonitor());
  app.use((req, res, next) => {
    req.scope = container.createScope();
    console.log(counter);
    req.scope.register({
      currentRequest: asValue({ counter: `${counter++}` }),
    });
    return next();
  });
  app.use(router);

  return {
    startServer: () => {
      app.listen(port, () => console.log("listen on port", port));
    },
  };
};

export default server;
