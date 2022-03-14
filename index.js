const inquirer = require("inquirer");
const db = require("./db");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "CodingCalvin360!",
  database: "employee_db",
});

async function mainMenu() {
  const { choices } = await inquirer.prompt([
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
        "Exit",
      ],
    },
  ]);
  switch (choices) {
    case "View all Departments":
      return viewAllDepartments();
    case "View all Roles":
      return viewAllRoles();
    case "View all Employees":
      return viewAllEmployees();
    case "Add Department":
      return addDepartment();
    case "Add Role":
      return addRole();
    case "Add Employee":
      return addEmployee();
    case "Update Employee Role":
      return updateEmployeeRole();
    case "Exit":
      return mainMenu();
  }
}

async function viewAllDepartments() {
  const [departments] = await db.viewAllDepartments();
  console.table(departments);
  mainMenu();
}

async function viewAllRoles() {
  const [roles] = await db.viewAllRoles();
  console.table(roles);
  mainMenu();
}

async function viewAllEmployees() {
  const [employees] = await db.viewAllEmployees();
  console.table(employees);
  mainMenu();
}

async function addDepartment() {
  const department = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the Department?",
    },
  ]);
  await db.addDepartment(department);
  console.log("New department added");
  mainMenu();
}

async function addRole() {
  const departments = await db.viewAllDepartments();
  const departmentChoices = departments.map(({ id, name }) => ({
    name: name,
    value: id,
  }));
  const role = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the role?",
    },
    {
      type: "input",
      name: "salary",
      message: "what is the salary of the title?",
    },
    {
      type: "list",
      name: "department_id",
      message: "Which department does the role belong to?",
      choices: departmentChoices,
    },
  ]);
  await db.addRole(role);
  console.log(`Added ${title.name} to the database`);
  mainMenu();
}

async function addEmployee() {
  const employee = await inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the employee's last name?",
    },
    {
      type: "list",
      name: "role_id",
      message: "What is the employee's role??",
      choices: selectRole(),
    },
    {
      type: "list",
      name: "manager_id",
      message: "Who is the employee's manager?",
      choices: selectManager(),
    },
  ]);
  mainMenu();
}

mainMenu();
