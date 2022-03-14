const inquirer = require("inquirer");
const mysql = require("mysql2");

inquirer.prompt([
  {
    type: "list",
    name: "choices",
    message: "What would you like to do?",
    choices: [
      "View all Departments",
      "View all Roles",
      "View all Employees",
      "Add Department",
      "Add Role",
      "Add Employee",
      "Update Employee Role",
    ],
  },
]);
