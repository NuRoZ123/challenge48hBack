import Joi from "joi";
import {HubServices} from "../services/HubServices.js";
import {CommandeService} from "../services/CommandeService.js";

export const CommandeCtrl = {
    save: async (ctx) => {
        try {
            const getAllMarchandValidationSchema = new Joi.array().items(
                Joi.object({
                    idProduit: Joi.number().required(),
                    idInstance: Joi.number().required()
                })
            );

            const params = ctx.request.body;
            const { error, value } = getAllMarchandValidationSchema.validate(params);
            if(error) throw new Error(error);


            let currentIdInstance = (await HubServices.getByIp(process.env.ip))["id"];

            let produits = params.filter(produit => produit.idInstance === currentIdInstance);

            if(produits.length > 0) {
                let commandeId = await CommandeService.createCommande(ctx.state.user["id"], currentIdInstance);
                await CommandeService.addProduitsToCommande(produits, commandeId);
            }

            ctx.noContent();
        } catch (e) {
            ctx.badRequest({message: e.message})
        }
    }
}