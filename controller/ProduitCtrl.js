import {ProduitServices} from "../services/ProduitServices.js";
import Joi from "joi";

export const ProduitCtrl = {
    getAll: async (ctx) => {
        ctx.ok(await ProduitServices.getAll());
    },
    getAllByMarchand: async (ctx) => {
        try {
            const getAllMarchandValidationSchema = new Joi.object({
                id: Joi.string().required()
            });

            const params = ctx.params;
            const { error, value } = getAllMarchandValidationSchema.validate(params);
            if(error) throw new Error(error);

            ctx.ok(await ProduitServices.getAllByMarchand(params.id));
        } catch (e) {
            ctx.badRequest({message: e.message})
        }
    }
}