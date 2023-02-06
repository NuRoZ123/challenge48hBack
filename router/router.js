import Router from "@koa/router";
import UserRouter from "./sousRouter/UserRouter.js";
import ProduitRouter from "./sousRouter/ProduitRouter.js";
import HubRouter from "./sousRouter/HubRouter.js";
import MarchandRouteur from "./sousRouter/MarchandRouteur.js";

const apiRouter = new Router({prefix: "/api"});

apiRouter.use("/users", UserRouter.routes(), UserRouter.allowedMethods());
apiRouter.use("/produits", ProduitRouter.routes(), ProduitRouter.allowedMethods());
apiRouter.use("/hub", HubRouter.routes(), HubRouter.allowedMethods());
apiRouter.use("/marchand", MarchandRouteur.routes(), MarchandRouteur.allowedMethods());

export default apiRouter;