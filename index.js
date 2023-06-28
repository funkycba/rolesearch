const db = require('./db/connection.js');
const inquirer = require('inquirer');
function loadMainPrompts() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View all departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View all roles",
                    value: "VIEW_ROLECALL"
                },
                {
                    name: "Add a new department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Add a new role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Add a new employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE"
                }

            ]
        }
    ]).then(res => {
        console.log(res);
        switch (res) {
            case "VIEW_EMPLOYEES":
                db.query('SELECT * FROM employee', function (err, results) {
                    console.table(results);
                    console.log(err, results);
                
                }
                ) 
                break;
                default:
                    quit();
        }
        // db.query('SELECT * FROM employee', function (err, results) {

        //     console.log(results);
        // }
        // )
    }
    ) .catch(err => console.log(err))
};
loadMainPrompts();