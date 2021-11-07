-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1

-- CREATE TABLE items (
-- 	item_name VARCHAR (50) NOT NULL,
-- 	item_price SMALLINT NOT NULL
-- ) 

-- INSERT INTO items (item_name, item_price)
-- VALUES 
-- ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80);


-- CREATE TABLE customers (
-- 	first_name VARCHAR (50) NOT NULL,
-- 	second_name VARCHAR (100) NOT NULL
-- )

-- INSERT INTO customers (first_name, second_name)
-- VALUES
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');

-- SELECT * FROM customers 
-- SELECT * FROM items

-- SELECT * FROM items WHERE item_price > 80;
-- SELECT * FROM items WHERE item_price <= 300;

-- SELECT * FROM customers WHERE second_name LIKE '%Smith';
-- SELECT * FROM customers WHERE second_name LIKE '%Jones';
-- SELECT * FROM customers WHERE second_name != 'Scott';


