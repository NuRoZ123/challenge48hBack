import { MarchandCtrl } from "../../controller/MarchandCtrl.js";
import Router from "@koa/router";

const MarchandRouteur = new Router();

MarchandRouteur.get("/", MarchandCtrl.getAll);

export default MarchandRouteur;