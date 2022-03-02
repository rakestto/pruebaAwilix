import container from "./container";

const application = container.resolve("server");

application.startServer();
