import mysql from "mysql-await";

export const database = {
    createConnexionInstance: () => {
        return mysql.createConnection({
            host: process.env.DbHostInstance,
            user: process.env.DbUserInstance,
            password: process.env.DbPasswordInstance,
            database: process.env.DbDatabaseInstance
        });
    },

    createConnexionHub: () => {
        return mysql.createConnection({
            host: process.env.DbHostHub,
            user: process.env.DbUserHub,
            password: process.env.DbPasswordHub,
            database: process.env.DbDatabaseHub
        });
    },

    closeConnexion: (connexion) => {
        connexion.end();
    },

    createTransaction: (connexion) => {
        connexion.beginTransaction();
    },

    commitTransaction: (connexion) => {
        connexion.commit();
    }
}