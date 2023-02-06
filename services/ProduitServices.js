import {database} from "../db/initDb.js";

export const ProduitServices = {
    getAll: async () => {
        let connexion = database.createConnexionInstance();
        let sql = `select * from Produit`;
        let response = await connexion.awaitQuery(sql);
        database.closeConnexion(connexion);
        return response;
    },
    getAllByMarchand: async (marchandId) => {
        let connexion = database.createConnexionInstance();
        let sql = `select * from Produit where idMarchand = ${marchandId}`;
        let result = connexion.awaitQuery(sql);
        database.closeConnexion(connexion);
        return result;
    }
}