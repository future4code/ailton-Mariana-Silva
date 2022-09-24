import { DataBase } from "../DataBase";
import { PostDataBase } from "../PostDataBase";
import { UserDataBase } from "../UserDataBase";
import { likes, posts, users } from "./data";

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
    } catch (error: any) {
      console.log("FAILED! Error in migrations...");
      console.log(error.message);
    } finally {
      console.log("Ending connection...");
      DataBase.connection.destroy();
      console.log("Connection closed graciously.");
    }
  };

  createTables = async () => {
    await DataBase.connection.raw(`
        DROP TABLE IF EXISTS ${PostDataBase.TABLE_LIKES};
        DROP TABLE IF EXISTS ${PostDataBase.TABLE_POSTS};
        DROP TABLE IF EXISTS ${UserDataBase.TABLE_USERS};
        
        CREATE TABLE IF NOT EXISTS ${UserDataBase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${PostDataBase.TABLE_POSTS}(
            id VARCHAR(255) PRIMARY KEY,
            content VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES ${UserDataBase.TABLE_USERS}(id)
        );

        CREATE TABLE IF NOT EXISTS ${PostDataBase.TABLE_LIKES}(
            id VARCHAR(255) PRIMARY KEY,
            post_id VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES ${UserDataBase.TABLE_USERS}(id),
            FOREIGN KEY (post_id) REFERENCES ${PostDataBase.TABLE_POSTS}(id)
        );
        `);
  };

  insertData = async () => {
    await DataBase.connection(UserDataBase.TABLE_USERS).insert(users);

    await DataBase.connection(PostDataBase.TABLE_POSTS).insert(posts);

    await DataBase.connection(PostDataBase.TABLE_LIKES).insert(likes);
  };
}

const migrations = new Migrations();
migrations.execute();
