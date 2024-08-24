1. 1st step install **npm i**
2. then download xampp for mysql
3. then run => npm install express mysql2 body-parser
4. start xampp and go to http://localhost/phpmyadmin
5. go to sql command 
    CREATE DATABASE school_management;
    USE school_management;
    CREATE TABLE schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        zip_code VARCHAR(10),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

paste this 
6. then do **npm start**
