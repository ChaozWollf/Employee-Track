INSERT INTO departments (dep_id, dep_name)
VALUES(01, "Customer Service"),
      (02, "Maintenence"),
      (03, "Human Resources"),
      (04, "Managment"),

INSERT INTO role (role_id, title, salary, department_id)
VALUES(14, "Manager", 150000, 04),
      (12, "Custodian", 35000),
      (15, "Training Coordinator", 80000, 03),
      (11, "Cashier", 30000, 01),
      (13, "Klutzy Colleague", 165000, 04),

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id) 
VALUES(001, "Gendo", "Ikari" 13, 001),
      (002, "Lucy", "Nyu" 14, 001),
      (003, "Light", "Yagami", 15, 002),
      (004, "Elizabeth", "Bathory", 11, 003),
      (005, "Liv", "Moore", 12, 002),
      (006, "Hannibal", "Lecter", 12, 002),
      (007, "John", "Kramer", 11, 003),

      
