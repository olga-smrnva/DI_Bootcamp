-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- CREATE TABLE students (
-- 	id SERIAL,
-- 	last_name VARCHAR (20) NOT NULL,
-- 	first_name VARCHAR (20) NOT NULL,
-- 	birth_date DATE NOT NULL
-- )

-- SET datestyle = "ISO, DMY";

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES
-- ('Marc', 'Benichou', '02/11/1998'),
-- ('Yoan', 'Cohen', '03/12/2010'),
-- ('Lea', 'Benichou', '27/07/1987'),
-- ('Amelia', 'Dux', '07/4/1996'),
-- ('David', 'Grez', '14/6/2003'),
-- ('Omer', 'Simpson', '03/10/1980');

-- SELECT * FROM students
-- SELECT last_name, first_name FROM students

-- SELECT last_name, first_name FROM students WHERE id =2;
-- SELECT last_name, first_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'
-- SELECT last_name, first_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'
-- SELECT last_name, first_name FROM students WHERE first_name LIKE '%a%'
-- SELECT last_name, first_name FROM students WHERE first_name ILIKE 'a%'
-- SELECT last_name, first_name FROM students WHERE first_name LIKE '%a'
-- SELECT last_name, first_name FROM students WHERE first_name LIKE '%a_'
-- SELECT last_name, first_name FROM students WHERE id = 3 OR id = 1 

-- SELECT * FROM students WHERE birth_date >= '1/01/2000'