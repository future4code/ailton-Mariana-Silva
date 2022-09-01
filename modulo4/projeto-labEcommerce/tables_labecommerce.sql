CREATE TABLE labecommerce_users (
         id INT PRIMARY KEY AUTO_INCREMENT,
         name VARCHAR(255) UNIQUE NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );
      
      SELECT * FROM labecommerce_users;
      
	CREATE TABLE labecommerce_products (
         id INT PRIMARY KEY AUTO_INCREMENT,
         name VARCHAR(255) UNIQUE NOT NULL,
         price FLOAT NOT NULL,
         image_url VARCHAR(255) NOT NULL
      );
      
      SELECT * FROM labecommerce_products;

      CREATE TABLE labecommerce_purchases (
         id INT PRIMARY KEY AUTO_INCREMENT,
         user_id  INT,
         product_id INT,
         quantity INT NOT NULL,
         total_price FLOAT NOT NULL,
         FOREIGN KEY(user_id) REFERENCES labecommerce_users(id),
         FOREIGN KEY(product_id) REFERENCES labecommerce_products(id)  
      );
      
		SELECT * FROM labecommerce_purchases;

      