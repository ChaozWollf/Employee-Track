DROP DATABASE IF EXISTS records_db;
CREATE DATABASE records_db;

USE records_db

CREATE TABLE departments(
   dep_id INT NOT NULL,
    dep_name VARCHAR(30),
PRIMARY KEY (dep_id)
);

CREATE TABLE role (
    role_id INT NOT NULL,
    title VARCHAR(30),
    salary: DEC,
    department id INT,
    PRIMARY KEY (role_idid)
);

CREATE TABLE employee (
    employee_id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

