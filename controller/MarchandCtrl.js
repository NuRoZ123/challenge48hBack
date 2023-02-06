import {MarchandServices} from "../services/MarchandServices.js";

export const MarchandCtrl = {
    getAll: async (ctx) => {
        ctx.ok(await MarchandServices.getAll());
    }
}