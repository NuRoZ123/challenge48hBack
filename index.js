import Koa from "koa";
import respond from "koa-respond";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import router from "./router/router.js";

const app = new Koa();
app
    .use(bodyParser())
    .use(respond())
    .use(cors({origin: "*"}))
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(process.env.PORT, () => console.log(`server running on http://localhost:${process.env.PORT}`))
