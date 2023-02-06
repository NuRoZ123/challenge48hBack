import Router from "@koa/router";
import {CommandeCtrl} from "../../controller/CommandeCtrl.js";
import {isAuthentificatedWithUser} from "../../middlewares/jwt-handler.js";

const CommandeRouteur = new Router();

CommandeRouteur.post("/save", CommandeCtrl.save);

export default CommandeRouteur;