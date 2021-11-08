-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

--  CREATE DATABASE "Hollywood"
--      WITH
--      OWNER = postgres
--      ENCODING = 'UTF8'
--      LC_COLLATE = 'C'
--      LC_CTYPE = 'C'
--      TABLESPACE = pg_default
--      CONNECTION LIMIT = -1;

-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- SELECT * FROM actors;

--  INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- SELECT * FROM actors;

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- SELECT count(*) FROM actors;

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('','Clooney','06/05/1961', ); // ERROR INSERT has more target columns than expressions
-- 											LINE 34: INSERT INTO actors (first_name, last_name, age, number_oscar...
