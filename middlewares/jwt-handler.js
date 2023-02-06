import KoaJWT from "koa-jwt";
import compose from "koa-compose";
import {UserServices} from "../services/UserServices.js";

export const isAuhtentificated = KoaJWT({
    secret: process.env.JWT_SECRET,
});

export const resovleUserFromJWT = async function(ctx, next) {
    try {
        ctx.state.user = await UserServices.getById(ctx.state.user.id);
        return next();
    } catch (e) {
        ctx.unauthorized({message: e.message});
    }
}

export const isAuthentificatedWithUser = compose([isAuhtentificated, resovleUserFromJWT]);