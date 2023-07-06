const db = require('./db/connection.js');
const inquirer = require('inquirer');
async function loadMainPrompts() {
    await inquirer.prompt([
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
                    value: "ADD_DEPARTMENT"//insert statement
                },
                {
                    name: "Add a new role",
                    value: "ADD_ROLE"// insert statements
                },
                {
                    name: "Add a new employee",
                    value: "ADD_EMPLOYEE"//insert statement
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE"// update statement
                }

            ]
        }
    ]).then(res => {

        switch (res.choice) {
            case "VIEW_EMPLOYEES":
                viewAllEmployees();
                break;
            case "VIEW_DEPARTMENTS":
                viewAllDepartments();
                break;
            case "VIEW_ROLECALL":
                viewAllRoles();
                break;
            case "ADD_DEPARTMENT":
                departmentAdd();
                break;
            case "ADD_ROLE":
                roleAdd();
                break;
            case "ADD_EMPLOYEE":
                employeeAdd();
                break;
            case "UPDATE_EMPLOYEE":
                updateEmployee();
                break;
        }

    }
    ).catch(err => console.log(err))
};

function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        if (err) console.log(err);
        console.table(results);
        loadMainPrompts();
    
    }
    )
}
function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        if (err) console.log(err);
        console.table(results);
        loadMainPrompts();
    
    }
    )
}
function viewAllRoles() {
    db.query('SELECT * FROM rolecall', function (err, results) {
        if (err) console.log(err);
        console.table(results);
        loadMainPrompts();
    
    }
    )
}
function departmentAdd() {
    db.query('INSERT INTO department', function (err, results) {
        if (err) console.log(err);
        console.table(results);
        loadMainPrompts();
    
    }
    )
}
function roleAdd() {
    db.query('INSERT INTO rolecall', function (err, results) {
        if (err) console.log(err);
        console.table(results);
        loadMainPrompts();
    
    }
    )
}
function employeeAdd() {
    db.query('INSERT INTO employee', function (err, results) {
        if (err) console.log(err);
        console.table(results);
        loadMainPrompts();
    
    }
    )
}

loadMainPrompts();