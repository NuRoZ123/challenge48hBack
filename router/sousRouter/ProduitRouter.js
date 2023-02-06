import { ProduitCtrl } from "../../controller/ProduitCtrl.js";
import Router from "@koa/router";

// import {isAuthentificatedWithUser} from "#middlewares/jwt-handler.js";

const ProduitRouter = new Router();

ProduitRouter.get("/", ProduitCtrl.getAll)
ProduitRouter.get("/filtre/marchand/:id", ProduitCtrl.getAllByMarchand)

export default ProduitRouter;