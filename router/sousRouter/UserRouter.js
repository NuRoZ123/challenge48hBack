import { UserCtrl } from "../../controller/UserCtrl.js";
import Router from "@koa/router";

// import {isAuthentificatedWithUser} from "#middlewares/jwt-handler.js";

const UserRouter = new Router();

UserRouter.post("/register", UserCtrl.register)
UserRouter.post("/login", UserCtrl.login)

export default UserRouter;