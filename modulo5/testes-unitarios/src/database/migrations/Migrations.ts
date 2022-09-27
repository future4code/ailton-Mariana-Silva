import { BaseDatabase } from "../BaseDatabase"
import { PostDatabase } from "../PostDatabase"
import { UserDatabase } from "../UserDatabase"
import { likes, posts, users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${PostDatabase.TABLE_LIKES};
        DROP TABLE IF EXISTS ${PostDatabase.TABLE_POSTS};
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${PostDatabase.TABLE_POSTS}(
            id VARCHAR(255) PRIMARY KEY,
            content VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES ${UserDatabase.TABLE_USERS}(id)
        );

        CREATE TABLE IF NOT EXISTS ${PostDatabase.TABLE_LIKES}(
            id VARCHAR(255) PRIMARY KEY,
            post_id VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES ${UserDatabase.TABLE_USERS}(id),
            FOREIGN KEY (post_id) REFERENCES ${PostDatabase.TABLE_POSTS}(id)
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)

        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(posts)

        await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .insert(likes)
    }
}

const migrations = new Migrations()
migrations.execute()