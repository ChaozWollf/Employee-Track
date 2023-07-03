USE records_db;
INSERT INTO department (dep_id, dep_name)
VALUES(1, "Customer Service"),
      (2, "Maintenence"),
      (3, "Human Resources"),
      (4, "Managment");

INSERT INTO roles (role_id, title, salary, department_id)
VALUES  (12, "Custodian", 35000, 2),       (15, "Training Coordinator", 80000, 3),
      (11, "Cashier", 30000, 1),
      (13, "Klutzy Colleague", 165000, 4),
      (14,"Manager",150000,4);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id) 
VALUES(1, "Gendo", "Ikari", 13, 1),
      (2, "Lucy", "Nyu" ,14, 1),
      (3, "Light", "Yagami", 15, 2),
      (4, "Elizabeth", "Bathory", 11, 3),
      (5, "Liv", "Moore", 12, 2),
      (6, "Hannibal", "Lecter", 12, 2),
      (7, "John", "Kramer", 11, 3); 

      
