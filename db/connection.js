const reqMysql = require("mysql2");

const connection = reqMysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Celecia09!",
  database: "employeedb",
});

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
