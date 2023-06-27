const inquirer = require('inquirer');
function loadMainPrompts(){
    return inquirer.prompt([
      {  type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES"
        },
      ]
    }
  ]).then(res => {
    db.query()
  })