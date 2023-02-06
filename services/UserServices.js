import {database} from "../db/initDb.js";

export const UserServices = {
    lastIdUtilisateurs: async () => {
        let connexion = database.createConnexionInstance();
        let sql = `SELECT MAX(id) as "id" FROM Utilisateurs`;
        let responses = await connexion.awaitQuery(sql);
        database.closeConnexion(connexion);
        return responses[0]["id"];
    },

    emailAlreadyUse: async (email) => {
      let connexion = database.createConnexionInstance();
      let sql = `select id from Utilisateurs where email = "${email}"`;
      let response = await connexion.awaitQuery(sql);
      database.closeConnexion(connexion);
      return response.length  >= 1;
    },

    register: async (email, password) => {
        let connexion = database.createConnexionInstance();
        let sql = `insert into Utilisateurs(email, password, idRole) values ("${email}", "${password}",  1);`;
        await connexion.awaitQuery(sql);
        database.closeConnexion(connexion);
        return await UserServices.lastIdUtilisateurs()
    },

    getUser: async (email) => {
        let connexion = database.createConnexionInstance();
        let sql = `select id, email, password from Utilisateurs where email = "${email}"`;
        let response = await connexion.awaitQuery(sql);
        database.closeConnexion(connexion);
        return response[0];
    },

    getById: async (id) => {
        let connexion = database.createConnexionInstance();
        let sql = `select * from Utilisateurs where id = ${id}`;
        let response = await connexion.awaitQuery(sql);
        database.closeConnexion(connexion);
        return response[0];
    }
}