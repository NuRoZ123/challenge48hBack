import {database} from "../db/initDb.js";

export const CommandeService = {
    addProduitsToCommande: async (produits, commandeId) => {
        let connexion = database.createConnexionInstance();
        database.createTransaction(connexion);

        for(let produit of produits) {
            let sql = `insert into produitCommander(idCommande, idProduit) values ("${commandeId}", "${produit.idProduit}")`;
            await connexion.awaitQuery(sql);
        }

        database.createTransaction(connexion);
        database.closeConnexion(connexion);
    },

    lastIdCommande: async () => {
        let connexion = database.createConnexionInstance();
        let sql = `SELECT MAX(id) as "id" FROM Commande`;
        let responses = await connexion.awaitQuery(sql);
        database.closeConnexion(connexion);
        return responses[0]["id"];
    },

    createCommande: async (idUser, idInstance) => {
        let connexion = database.createConnexionInstance();
        let sql = `insert into Commande(idUtilisateur, idInstance) values ("${idUser}", "${idInstance}")`;
        await connexion.awaitQuery(sql);
        database.closeConnexion(connexion);
        return await CommandeService.lastIdCommande();
    }
}