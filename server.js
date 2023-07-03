const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
// const { kMaxLength } = require('buffer');
// const { type } = require('os');
const app = express();
const PORT = process.env.PORT || 3001;

inquirer
    .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'what would you like to do?',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']

        }
    ]).then()
if ('view all departments') {
case
    // when choose to view all departments
    //figure out how to display departments table here
}
else if
case
{
    //when view all roles 
    //figure out how to display role table
}

else if
case
{
    //when view all employees
    //figure out how to show employee table
}

else
case
{
    //when add department
    inquirer
        .prompt([
            {
                type: 'maxlength-input',
                name: 'add_dep',
                message: 'what is the name of the department?(30 characters max)',
                maxLength: 30,
            }.then(('INSERT ${add_dep} to departments'))
            // figure out the above line also

        ])
}
else
case
//when add a role
{
    inquirer
        .prompt([
            {
                type: 'maxength-input',
                name: 'add-role',
                message: 'what is the name of the role?'
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
        ]).then(
            INSERT INTO role(title, salary, department_id)
        VALUES(${ add_role }, ${ add_salary }, ${ dep_role });


}
else
case
//when add an employee
{
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
                choices []

            },
        ]).then(
            INSERT INTO employee(first_name, last_name, role_id, manager_id)
            VALUES(${}, ${}, emp_role.value, emp_manager.value)
        )


},
else
case
//updating an employee
{
    inquirer
        .propmt([

            {
                type: 'list',
                name: 'emp_id',
                message: 'which employees role do you want to update?',
                choices: []
            },
            {
                type: 'list',
                name: 'emp_newRole',
                message: 'what would you like this employees new role to be?',
                choices[]
},
        ]).then(
            UPDATE employee
        SET role_id =${emp_newRole}
        WHERE employee_id = ${emp_id}
        )

};
app.listen(PORT, () =>
console.log(`Server on port ${PORT} listening`));