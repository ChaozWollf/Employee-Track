
DROP DATABASE IF EXISTS records_db;
CREATE DATABASE records_db;

USE records_db;

CREATE TABLE departments (
   department_id INT UNSIGNED AUTO_INCREMENT,
    dep_name VARCHAR(30),
PRIMARY KEY(department_id)
);

CREATE TABLE roles (
    role_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary INT, 
    department_id INT UNSIGNED,
     FOREIGN KEY (department_id)
   REFERENCES departments(department_id)
   ON DELETE SET NULL
   
);

CREATE TABLE employees(
    employee_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT UNSIGNED,
    salary INT,
    manager_id INT UNSIGNED,
FOREIGN KEY (role_id)
REFERENCES roles(role_id)
ON DELETE SET NULL,
FOREIGN KEY (manager_id)
REFERENCES employees(employee_id)
);