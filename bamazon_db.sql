CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id integer (10) auto_increment NOT NULL,
product_name VARCHAR (30) NOT NULL,
department_name VARCHAR (30),
price DECIMAL (10,4),
stock_qty integer (10),
PRIMARY KEY (item_id)
);






