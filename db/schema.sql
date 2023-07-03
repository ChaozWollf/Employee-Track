
DROP DATABASE IF EXISTS records_db;
CREATE DATABASE records_db;

USE records_db

CREATE TABLE departments(
   dep_id INT NOT NULL,
    dep_name VARCHAR(30),
PRIMARY KEY (dep_id)
);

CREATE TABLE roles (
    role_id INT NOT NULL,
    title VARCHAR(30),
    salary: INT, 
    department_id INT,
    PRIMARY KEY (role_id)
   FOREIGN KEY (department_id)
   REFERENCES departments(id)
    -- PRIMARY key (salary)
);

CREATE TABLE employee (
    employee_id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    salary:INT,
    manager_id INT
PRIMARY KEY (employee_id)
FOREIGN KEY (role_id)
REFERENCES roles(role_id)
FOREIGN KEY (manager_ID)
REFERENCES employee(employee_id)
);