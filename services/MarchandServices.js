import {database} from "../db/initDb.js";

export const MarchandServices = {
    getAll: async () => {
        let connexion = database.createConnexionInstance();
        let sql = `select * from Marchand`;
        let response = await connexion.awaitQuery(sql);
        database.closeConnexion(connexion);
        return response;
    }
}