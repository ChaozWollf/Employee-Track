const mysql = require('mysql2');
const inquirer = require('inquirer');
//connection to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'MySql',
        database: 'records_db'
    },
    console.log(`Connected to the records_db database.`)
);

//main menu selection
const mainmenu = () =>  {

    inquirer
    .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'what would you like to do?',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit']

        }
    ]).then((answers) => {
        switch(answers.action){
        case 'view all departments':
                viewAllDepartments ();
            mainmenu();
            break;
            case 'view all roles':
                viewAllRoles();
                mainmenu();
                break;
            case 'view all employees':
                viewAllEmployees();
                mainmenu();
                break;
            case 'add a department':
                addADepartment();
                break;
            case 'add a role':
                addARole();
                  break;
            case 'add an employee':
                addAnEmployee();
                 break;
            case 'update an employee role':
                updateAnEmployee();
                // mainmenu();
                break;
    
                default: 
                console.log('exiting application')
                process.exit();
            }
    })
} 

mainmenu();

//view the departments table
const viewAllDepartments = () => {
    db.query('SELECT * FROM departments', (err, res) => {
        console.table(res)
    })
 }; 


//view the roles table
 const viewAllRoles = () => {
    db.query('SELECT * FROM roles', (err, res) => {
        console.table(res)
    })
   
};

//view the employees table
const viewAllEmployees =() => {
    db.query('SELECT * FROM employees', (err, res) => {
        console.table(res)
    })
     
};

//adding a department using inquirer and a data base query
const addADepartment = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "add_dep",
                message: "what is the name of the department?",
            },
        ])
        .then((data) => {
            const sql = `INSERT INTO departments(dep_name)VALUES(?)`;
            const params = [data.add_dep];

            db.query(sql, params, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Department added successfully!");
                mainmenu();
                }
            });
        
        
        
        });
};

//adding a role using inquirer and a database query
const addARole = () => {
    db.query('SELECT * FROM departments', (err, res) => {
        const departmentChoices = res.map(({ department_id, dep_name }) => ({

            name: dep_name,
            value: department_id
        }));

    inquirer
        .prompt([
            {
                type: "input",
                name: "add_role",
                message: "what is the name of the role?",
            },
            {
                type: 'input',
                name: 'add_salary',
                message: 'what is the salary for this role?',
            },
            {
                type: 'list',
                name: 'dep_role',
                message: 'which department is this role going to be for?',
                choices: departmentChoices
            },
        ])
        .then((data) => {
            const sql = `INSERT INTO roles(title, salary, department_id)VALUES(?,?,?)`;
            const params = [data.add_role, data.add_salary, data.dep_role];

            db.query(sql, params, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Role added successfully!");
               mainmenu();
                }
            });

       });

    });
       
    };
   
 //adding an emloyee using inquirer and a database query
    const addAnEmployee = () => {
     db.query('SELECT * FROM roles', (err, res) => {
         const rolesChoices = res.map(({ role_id, title,salary, department_id }) => ({

             name: title,
             value: role_id
         }));
         db.query('SELECT * FROM employees', (err, res) => {
             const managerChoices = res.map(({ employee_id, first_name, last_name, role_id, salary, manager_id }) => ({

                 name: `${first_name} ${last_name}`,
                 value: employee_id
             }));



    inquirer
        .prompt([
            {
                type: 'input',
                name: 'emp_firstName',
                message: 'what is the employees first name?'
            },
            {
                type: 'input',
                name: 'emp_lastName',
                message: 'what is the employees last name?'

            },
            {
                type: 'list',
                name: 'emp_role',
                message: 'what is the employees role?',
                choices: rolesChoices
            },
            {
                type: 'list',
                name: 'emp_manager',
                message: 'who is the employees manager?',
                choices: managerChoices

            },
   
        ])
        .then((data) => {
            const sql = `INSERT INTO employees(first_name, last_name, role_id, manager_id)VALUES(?,?,?,?)`;
            const params = [data.emp_firstName, data.emp_lastName, data.emp_role, data.emp_manager];

            db.query(sql, params, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Employee added successfully!");
                    mainmenu();
                }
            });

        });
    });
    });
    };
   



//updating the role of a current employee using database query and inquirer
const updateAnEmployee = () => {
    db.query('SELECT * FROM roles', (err, res) => {
        const roleChoices = res.map(({ role_id, title,salary, department_id}) => ({

            name: title,
            value: role_id
        }));
        db.query('SELECT * FROM employees', (err, res) => {
            const employeeChoices = res.map(({ employee_id, first_name, last_name, role_id, salary, manager_id }) => ({

                name: `${first_name} ${last_name}`,
                value: employee_id
            }));
    
           
             inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'employeeRoleChange',
                    message: 'what is the name of the emlpoyee who is getting a different role?',
                    choices: employeeChoices
                },
                {
                    type: 'list',
                    name: 'roleChange',
                    message: 'which role is this employee going into?',
                    choices: roleChoices
                },
            ])
            .then((data) => {
                const sql = `UPDATE employees SET role_id = ? WHERE employee_id = ?`;
                const params = [data.roleChoices, data.employeeChoices];

                db.query(sql, params, (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Role changed successfully!");
                        mainmenu();
                    }
                });

            });

    });

});

 


};

 
