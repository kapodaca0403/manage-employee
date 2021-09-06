const inquirer = require("inquirer");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");
const dbFol = require("./db");
require("console.table");

const PORT = process.env.PORT || 3030;

db.query(`SELECT * FROM employee_names`, function (err, results) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

//need to be able to chose from options, view all departments, roles, employees and department and add all of the above
// need to be able to view all info for each choice option 
// needing to show prompts when choices are selected


const questions = [
  {
    type: "list",
    message: "What would you like to view?",
    name: "view",
    choices: ["None", "Add", "Update", "View"],
  },
];

const

// need to be able to add role, employee, department and manager
const addRole = [
  {
    type: "input",
    message: "What is the name of this role?",
    name: "Role",
  },
  {
    type: "input",
    message: "Please add salary for this role",
    name: "Salary",
  }, {
      type: "input", 
      message: "What Department would you like to add new role?",
      name: "WherTo",
  },
];

const addEmploy = [
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
];

const addMan = [
  {
    type: "input",
    message: "Enter First Name for new Manager",
    name: "FirstName",
  },
  {
    type: "input",
    message: "Enter Last Name for new manager",
    name: "LastName",
  },
  {
    type: "input",
    message: "Enter Department",
    name: "Department",
  },
];

const addDep = [
  {
    type: "input",
    message: "Enter new Department name",
    name: "Department",
  },
];

db.query("Select * from department", function (err, results) {});

app.listen(PORT, () => {
  console.log(`Receiving from port ${PORT}`);
});
