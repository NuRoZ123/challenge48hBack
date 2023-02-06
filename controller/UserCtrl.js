import Joi from "joi";
import argon2 from "argon2";
import {UserServices} from "../services/UserServices.js";
import jwt from "jsonwebtoken";

export const UserCtrl = {
    generateJWT: (userId) => {
        const token = jwt.sign({id: userId}, process.env.JWT_SECRET, {
            issuer: process.env.APP_NAME,
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        return token;
    },

    register: async (ctx) => {
        try {
            const registerValidationSchema = new Joi.object({
                email: Joi.string().email().required(),
                password: Joi.string().min(6).required()
            });

            const params = ctx.request.body;
            const { error, value } = registerValidationSchema.validate(params);
            if(error) throw new Error(error);

            if(await UserServices.emailAlreadyUse(params.email)) {
                throw new Error("Email déja utilisé!");
            }

            const hashPassword = await argon2.hash(params.password);

            let id = await UserServices.register(params.email, hashPassword);

            ctx.ok(UserCtrl.generateJWT(id));
        } catch (e) {
            ctx.badRequest({message: e.message})
        }
    },

    login: async (ctx) => {
        try {
            const registerValidationSchema = new Joi.object({
                email: Joi.string().email().required(),
                password: Joi.string().min(6).required()
            });

            const params = ctx.request.body;
            const { error, value } = registerValidationSchema.validate(params);
            if(error) throw new Error(error);

            let user = await UserServices.getUser(params.email);

            if(!user) {
                throw new Error("Identifiant ou mot de passe incorrect");
            }

            if(!(await argon2.verify(user["password"], params.password))) {
                throw new Error("Identifiant ou mot de passe incorrect");
            }

            console.log(user["id"])
            ctx.ok(UserCtrl.generateJWT(user["id"]));
        } catch (e) {
            ctx.badRequest({message: e.message})
        }
    }
};