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
    inquirer.prompt([ 
        {
        type: 'input',
        name: 'departmentName',
        message: 'Enter the name of department:'
      }
    ]).then(answers => {
        const { departmentName } = answers;
        const sql = 'INSERT INTO department (name) VALUES (?)';
    
        db.query(sql, [ departmentName ], function (err, results) {
          if (err) console.log(err);
          console.table(results);
          loadMainPrompts();
        });
      }).catch(err => console.log(err));
}
function roleAdd() {
    inquirer.prompt([
        {
          type: 'input',
          name: 'roleTitle',
          message: 'Enter the role title:'
        },
        {
          type: 'input',
          name: 'salary',
          message: 'Enter the salary for the role:'
        },
        {
          type: 'input',
          name: 'departmentId',
          message: 'Enter the department ID for the role:'
        }
        // Add more prompts for other role attributes if necessary
      ]).then(answers => {
        const { roleTitle, salary, departmentId } = answers;
        const sql = 'INSERT INTO rolecall (title, salary, department_id) VALUES (?, ?, ?)';
    
        db.query(sql, [roleTitle, salary, departmentId], function (err, results) {
          if (err) console.log(err);
          console.table(results);
          loadMainPrompts();
        });
      }).catch(err => console.log(err));
}
function employeeAdd() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter firstname:'
        },
        {
          type: 'input',
          name: 'lastName',
          message: 'Enter last name:'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the role ID:'
        },
        {
          type: 'input',
          name: 'managerId',
          message: 'Enter the manager ID for the employee:'
        }
        // Add more prompts for other role attributes if necessary
      ]).then(answers => {
        const { firstName, lastName, roleId, managerId } = answers;
        const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    
        db.query(sql, [firstName, lastName, roleId, managerId], function (err, results) {
          if (err) console.log(err);
          console.table(results);
          loadMainPrompts();
        });
      }).catch(err => console.log(err));
}
function updateEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee id:'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter role:'
        }
    ]).then(answers => {
        const { id,  role_id, } = answers;
        const sql = 'UPDATE employee SET ? WHERE id = ?';
    
        db.query(sql, [{role_id},id], function (err, results) {
          if (err) console.log(err);
          console.table(results);
          loadMainPrompts();
        });
      }).catch(err => console.log(err));
    }

loadMainPrompts();