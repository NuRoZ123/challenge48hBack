import { HubCtrl } from "../../controller/HubCtrl.js";
import Router from "@koa/router";

const HubRouter = new Router();

HubRouter.get("/host/all", HubCtrl.getAll)

export default HubRouter;