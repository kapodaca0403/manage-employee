const reqMysql = require("mysql2");
const inquirer = require("inquirer");

const consoleTable = require("console.table");

const connection = reqMysql.createConnection(
  {
    host: "localhost",
    port: 3030,
    user: "root",
    password: "Celecia09!",
    database: "employee_db",
  },
  console.log(`employee_db database connected`)
);

connection.connect((err) => {
  console.log("Connected");
  getOptions();
});

//need to be able to chose from options, view all departments, roles, employees and department and add all of the above
// need to be able to view all info for each choice option
// needing to show prompts when choices are selected

function getOptions() {
  inquirer
    .prompt({
      type: "list",
      name: "options",
      message: "What do you want to start with first?",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Department",
        "View Role",
        "View Employee",
        "Finished",
      ],
    })

    // Call the appropriate function depending on what the user chose
    .then(function (answer) {
      switch (answer.options) {
        case "Add Role":
          addEmrole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "View Employee":
          viewEmployee();
          break;
        case "View Department":
          viewDepartment();
          break;
        case "View Role":
          viewEmrole();
          break;
        default:
          quit();
      }
    });
}

function addEmrole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of this role?",
        name: "Role",
      },
      {
        type: "input",
        message: "Please add salary for this role",
        name: "Salary",
      },
      {
        type: "input",
        message: "What Department would you like to add new role?",
        name: "Department",
      },
    ])
    .then(function (answer) {
      db.query`INSERT INTO Emrole (
      title, salary, department_id) VALUES ('${answer.Emrole}', '${answer.salary}' , '${answer.department_id}')`,
        function (err, res) {
          if (err) throw err;
          console.table(res);
          getOptions();
        };
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter First Name for new Employee?",
        name: "FirstName",
      },
      {
        type: "input",
        message: "Enter Last Name for new Employee",
        name: "LastName",
      },
      {
        type: "input",
        message: "Enter role for new Employee",
        name: "Role",
      },
      {
        type: "input",
        message: "Enter Manager for new Employee",
        name: "Manager",
      },
      {
        type: "input",
        message: "Enter Department",
        name: "Department",
      },
    ])
    .then(function (answer) {
      db.query`INSERT INTO employee (
    first_name, last_name, role_id, manager_id) VALUES ('${answer.firstName}', 
'${answer.lastName}', '${answer.roleId}', '${answer.managerId}')`,
        function (err, res) {
          if (err) throw err;
          console.table(res);
          getOptions();
        };
    });
}


function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter new Department name",
        name: "Department",
      },
    ])
    .then(function (answer) {
      db.query(
        `INSERT INTO department (name) VALUES ('${answer.name}' )`,
        function (err, res) {
          if (err) throw err;
          console.table(res);
          getOptions();
        }
      );
    });
}

function viewDepartment() {
  let query = "SELECT * FROM department";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    getOptions();
  });
}

function viewEmrole() {
  let query = "SELECT * FROM role";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    getOptions();
  });
}

function viewEmployee() {
  let query = "SELECT * FROM Employ";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    getOptions();
  });
}

// //db.query("Select * from department", function (err, results) {});
// createTable();
function quit() {
  console.log("finished");
}

// app.listen(PORT, () => {
//   console.log(`Receiving from port ${PORT}`);
// });
