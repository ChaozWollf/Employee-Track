const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'MySql',
        database: 'records_db'
    },
    console.log(`Connected to the records_db database.`)
);
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
                mainmenu();
                break;
    
                default: 
                console.log('exiting application')
                process.exit();
            }
    })
} 

mainmenu();

const viewAllDepartments = () => {
    db.query('SELECT * FROM departments', (err, res) => {
        console.table(res)
    })
 }; 


const viewAllRoles = () => {
    db.query('SELECT * FROM roles', (err, res) => {
        console.table(res)
    })
   
};

const viewAllEmployees =() => {
    db.query('SELECT * FROM employees', (err, res) => {
        console.table(res)
    })
     
};
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


const addARole = () => {
   
    inquirer
        .prompt([
            {
                type: "input",
                name: "add_role",
                message: "what is the name of the role?",
            },
            {
                type: 'list',
                name: 'add_salary',
                message: 'what is the salary for this role?'
            },
            {
                type: 'list',
                name: 'dep_role',
                message: 'which department is this role going to be for?'
            },
        ])
        .then((data) => {
            const sql = `INSERT INTO roles(title, salary, deptartment_id)VALUES(?)`;
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

      };
   
 const addAnEmployee = () => {
   
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
                choices: []
            },
            {
                type: 'list',
                name: 'emp_manager',
                message: 'who is the employees manager?',
                choices: []

            },
   
        ])
        .then((data) => {
            const sql = `INSERT INTO employees(first_name, last_name, role_id, manager_id)VALUES(?)`;
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
        
};
   




const updateAnEmployee = () => {
    console.log('update an employee')


};

 
// inquirer
//     .prompt([
//         {
//             type: 'list',
//             name: 'action',
//             message: 'what would you like to do?',
//             choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']

//         }
//     ]).then((answers) => {
// if (answers.action =='view all departments') {
//     console.log(viewDepartments)
//     // when choose to view all departments
//     //figure out how to display departments table here
// }
// else if (answers.action == 'view all roles') 
// {
//     //when view all roles 
//     //figure out how to display role table
// }
// else if (answers.action == 'view all employees')
// {
//     //when view all employees
//     //figure out how to show employee table
// }

// else if (answers.action == 'add a department') 
// {
//     //when add department
//     inquirer
//         .prompt([
//             {
//                 type: 'maxlength-input',
//                 name: 'add_dep',
//                 message: 'what is the name of the department?(30 characters max)',
//                 maxLength: 30,
//             }.then('INSERT INTO departments(dep_name)',
//             VALUES(add_dep))
//             // figure out the above line also

//         ])
// }
// // else if (answers.action == 'add a role')
// //when add a role
// {
//     inquirer
//         .prompt([
//             {
//                 type: 'maxength-input',
//                 name: 'add-role',
//                 message: 'what is the name of the role?'
//             },
//             {
//                 type: 'list',
//                 name: 'add_salary',
//                 message: 'what is the salary for this role?'
//             },
//             {
//                 type: 'list',
//                 name: 'dep_role',
//                 message: 'which department is this role going to be for?'
//             },
//         ]).then (
//             'INSERT INTO role(title, salary, department_id)',
//         VALUES(add_role ,add_salary , dep_role ))


// }
// else if (answers.action == 'add an employee')
// //when add an employee
// {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'emp_firstName',
//                 message: 'what is the employees first name?'
//             },
//             {
//                 type: 'input',
//                 name: 'emp_lastName',
//                 message: 'what is the employees last name?'

//             },
//             {
//                 type: 'list',
//                 name: 'emp_role',
//                 message: 'what is the employees role?',
//                 choices: []
//             },
//             {
//                 type: 'list',
//                 name: 'emp_manager',
//                 message: 'who is the employees manager?',
//                 choices []

//             },
//         ]).then(
//              'INSERT INTO employee(first_name, last_name, role_id, manager_id)',
//             VALUES(emp_firstName ,emp_lastname ,emp_role ,emp_manager))
        


// }
// else if (answers.action == 'update an employee role') 
// //updating an employee
// {
//     inquirer
//         .propmt([

//             {
//                 type: 'list',
//                 name: 'emp_id',
//                 message: 'which employees role do you want to update?',
//                 choices: []
//             },
//             {
//                 type: 'list',
//                 name: 'emp_newRole',
//                 message: 'what would you like this employees new role to be?',
//                 choices[]
// }
//         ]).then(
//             UPDATE employee
//         SET role_id = emp_newRole
//         WHERE employee_id = employee_id
//         )

//     }});
