DROP DATABASE IF EXISTS ylk0s9x31j3ms9w5;

CREATE DATABASE ylk0s9x31j3ms9w5;

USE ylk0s9x31j3ms9w5;


CREATE TABLE burgers (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    burgerName VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL
);
