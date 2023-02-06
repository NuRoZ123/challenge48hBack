import {HubServices} from "../services/HubServices.js";

export const HubCtrl = {
    getAll: async (ctx) => {
        ctx.ok(await HubServices.getAll());
    }
}