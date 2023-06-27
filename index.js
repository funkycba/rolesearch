const inquirer = require('inquirer');
function loadMainPrompts() {
    return inquirer.prompt([
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
        db.query('SELECT * FROM employee', function (err, results) {
            console.log(results);
        }
        )
    }
    )
};
loadMainPrompts();