import Router from "@koa/router";
import UserRouter from "./sousRouter/UserRouter.js";

const apiRouter = new Router({prefix: "/api"});

apiRouter.use("/users", UserRouter.routes(), UserRouter.allowedMethods());

export default apiRouter;