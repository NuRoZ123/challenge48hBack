import Koa from "koa";
import respond from "koa-respond";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";

const app = new Koa();
app
    .use(bodyParser())
    .use(respond())
    .use(cors({origin: "*"}))

app.listen(process.env.PORT, () => console.log(`server running on http://localhost:${process.env.PORT}`))
