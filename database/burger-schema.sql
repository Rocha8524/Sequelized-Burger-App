-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS burgers;
-- Creates the "blogger" database --
CREATE DATABASE burgers;

USE burgers;

DROP TABLE IF EXISTS burgers;
DROP TABLE IF EXISTS customers;

-- # Create the burgers table
-- CREATE TABLE burgers (
-- id INT NOT NULL AUTO_INCREMENT,
-- burger_name VARCHAR(100) NOT NULL,
-- devoured BOOLEAN DEFAULT false,
-- PRIMARY KEY (id)
-- );