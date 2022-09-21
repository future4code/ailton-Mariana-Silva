CREATE TABLE
    cookenu_users (
        user_id VARCHAR(255) PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        user_email VARCHAR(255) UNIQUE NOT NULL,
        user_password VARCHAR(255) NOT NULL
    );

ALTER TABLE cookenu_users
ADD
    COLUMN role VARCHAR(25) NOT NULL DEFAULT "NORMAL";

SELECT * FROM cookenu_users;

CREATE TABLE
    cookenu_recipes (
        recipe_id VARCHAR(255) NOT NULL PRIMARY KEY UNIQUE,
        recipe_title VARCHAR(255) NOT NULL,
        recipe_description VARCHAR(255) NOT NULL,
        author_id VARCHAR(255) NOT NULL,
        creation_date DATE NOT NULL,
        FOREIGN KEY (author_id) REFERENCES cookenu_users(user_id)
    );

SELECT * FROM cookenu_recipes;

CREATE TABLE
    cookenu_followers (
        followed_id VARCHAR(255) NOT NULL,
        follower_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (followed_id) REFERENCES cookenu_users(user_id),
        FOREIGN KEY (follower_id) REFERENCES cookenu_users(user_id)
    );

SELECT * FROM cookenu_followers;