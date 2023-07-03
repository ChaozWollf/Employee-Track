
DROP DATABASE IF EXISTS records_db;
CREATE DATABASE records_db;

USE records_db;

CREATE TABLE department (
   dep_id INT NOT NULL,
    dep_name VARCHAR(30),
PRIMARY KEY (dep_id)
);

CREATE TABLE roles (
    role_id INT NOT NULL,
    title VARCHAR(30),
    salary INT, 
    department_id INT,
    PRIMARY KEY (role_id),
   FOREIGN KEY (department_id)
   REFERENCES department(dep_id)
   ON DELETE SET NULL
    -- PRIMARY key (salary)
);

CREATE TABLE employee (
    employee_id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    salary INT,
    manager_id INT,
PRIMARY KEY (employee_id),
FOREIGN KEY (role_id)
REFERENCES roles(role_id),
ON DELETE SET NULL,
FOREIGN KEY (manager_id)
REFERENCES employee(employee_id)
);