import { DataBase } from "../DataBase";
import { ShowDataBase } from "../ShowDataBase";
import { UserDataBase } from "../UserDataBase";
import { shows, tickets, users } from "./data";

class Migrations extends DataBase {
  execute = async () => {
    try {
      console.log("Creating tables...");
      await this.createTables();
      console.log("Tables created successfully.");

      console.log("Populating tables...");
      await this.insertData();
      console.log("Tables populated successfully.");

      console.log("Migrations completed.");
    } catch (error) {
      console.log("FAILED! Error in migrations...");
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      console.log("Ending connection...");
      DataBase.connection.destroy();
      console.log("Connection closed graciously.");
    }
  };

  createTables = async () => {
    await DataBase.connection.raw(`
        DROP TABLE IF EXISTS ${ShowDataBase.TABLE_TICKETS};
        DROP TABLE IF EXISTS ${ShowDataBase.TABLE_SHOWS};
        DROP TABLE IF EXISTS ${UserDataBase.TABLE_USERS};
        
        CREATE TABLE IF NOT EXISTS ${UserDataBase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${ShowDataBase.TABLE_SHOWS}(
            id VARCHAR(255) PRIMARY KEY,
            band VARCHAR(255) NOT NULL,
            starts_at DATE NOT NULL,
            tickets INT DEFAULT 5000 NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${ShowDataBase.TABLE_TICKETS}(
            id VARCHAR(255) PRIMARY KEY,
            show_id VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES ${UserDataBase.TABLE_USERS}(id),
            FOREIGN KEY (show_id) REFERENCES ${ShowDataBase.TABLE_SHOWS}(id)
        );
        `);
  };

  insertData = async () => {
    await DataBase.connection(UserDataBase.TABLE_USERS).insert(users);

    await DataBase.connection(ShowDataBase.TABLE_SHOWS).insert(shows);

    await DataBase.connection(ShowDataBase.TABLE_TICKETS).insert(tickets);
  };
}

const migrations = new Migrations();
migrations.execute();
