-- DAY 2 -- EX_XP

-- SELECT * FROM items ORDER BY item_price ASC;
-- SELECT * FROM items WHERE item_price >= 80 ORDER BY item_price DESC;
-- SELECT first_name, second_name FROM customers ORDER BY second_name ASC LIMIT 3;
-- SELECT second_name FROM customers ORDER BY second_name ASC;

-- ALTER TABLE items ADD COLUMN item_id SERIAL PRIMARY KEY;
-- ALTER TABLE customers ADD COLUMN customer_id SERIAL PRIMARY KEY;

-- CREATE TABLE purchases (
-- 	customer_id SMALLINT NOT NULL,
-- 	item_id SMALLINT NOT NULL,
-- 	FOREIGN KEY (customer_id) REFERENCES customers (customer_id),
-- 	FOREIGN KEY (item_id) REFERENCES items (item_id)
-- );

-- INSERT INTO purchases (customer_id, item_id)
-- VALUES (
-- (SELECT customer_id FROM customers WHERE customer_id = 1)
-- -- );
-- //ERROR:  INSERT has more target columns than expressions
-- LINE 69: INSERT INTO purchases (customer_id, item_id)

-- INSERT INTO purchases (customer_id, item_id)
-- VALUES 
-- (
-- (SELECT customer_id FROM customers WHERE customer_id = 1), 
-- (SELECT item_id FROM items WHERE item_id = 1)
-- ),
-- (
-- (SELECT customer_id FROM customers WHERE customer_id = 2), 
-- (SELECT item_id FROM items WHERE item_id = 2)
-- ),
-- (
-- (SELECT customer_id FROM customers WHERE customer_id = 3), 
-- (SELECT item_id FROM items WHERE item_id = 3)
-- ),
-- (
-- (SELECT customer_id FROM customers WHERE customer_id = 4), 
-- (SELECT item_id FROM items WHERE item_id = 1)
-- ),
-- (
-- (SELECT customer_id FROM customers WHERE customer_id = 5), 
-- (SELECT item_id FROM items WHERE item_id = 2)
-- );

-- SELECT * FROM purchases;
-- SELECT * FROM purchases INNER JOIN customers ON purchases.customer_id = customers.customer_id;
-- SELECT item_id FROM purchases WHERE customer_id = 4;
-- SELECT customer_id FROM purchases WHERE item_id = 1 OR item_id = 2;






