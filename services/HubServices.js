import {database} from "../db/initDb.js";

export const HubServices = {
    getAll: async () => {
        let connexion = database.createConnexionHub();
        let sql = `select * from Instance`;
        let result = await connexion.awaitQuery(sql);
        database.closeConnexion(connexion);
        return result;
    },

    getByIp: async (ip) => {
        let connexion = database.createConnexionHub();
        let sql = `select * from Instance where ip = "${ip}"`;
        let result = await connexion.awaitQuery(sql);
        database.closeConnexion(connexion);
        return result[0];
    }
}