const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  viewAllDepartments() {
    return this.connection.promise().query(
      `
        SELECT
            department.id,
            department.name AS department
        FROM
            department
    `
    );
  }

  viewAllRoles() {
    return this.connection.promise().query(
      `
        SELECT 
            role.id,
            role.title,
            role.salary,
            department.name AS department
        FROM 
            role
        LEFT JOIN
            department ON role.department_id = department.id

    `
    );
  }

  viewAllEmployees() {
    return this.connection.promise().query(`
          SELECT
              employee.role_id,
              employee.first_name,
              employee.last_name,
              role.title,
              role.salary,
              department.name AS department,
          CONCAT (e.first_name, ' ', e.last_name) AS manager
          FROM
              employee
          INNER JOIN
              role ON role.id = employee.role_id
          INNER JOIN
              department ON department.id = role.department_id
          LEFT JOIN
              employee e ON employee.manager_id = e.id
      `);
  }

  addDepartment(department) {
    return this.connection.promise().query(
      `
        INSERT INTO
            department
        SET
            ?
    `,
      department
    );
  }

  addRole(role) {
    return this.connection.promise().query(
      `
        INSERT INTO
            role
        SET
            ?
        `,
      role
    );
  }

  addEmployee(employee) {
    return this.connection.promise().query(
      `
      INSERT INTO
        employee
      SET
        ?
      `,
      employee
    );
  }
}

module.exports = new DB(connection);
