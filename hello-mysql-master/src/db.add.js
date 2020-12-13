const Promise = require("bluebird");
const mysql = require("mysql");

// promisify the mysql callback methods
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
  host: "192.168.64.5", // localhost
  user: "mysql",
  password: "mysql",
  database: "mydb",
};

let addUserStatic = async () => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();

  const sql =
    "INSERT INTO USER (USERNAME, PASSWORD, EMAIL, MOBILE) VALUES (?, ?, ?, ?)";
  await connection.queryAsync(sql, [
    "NODE JS PROGAAMING",
    "1234",
    "node@gmail.com",
    "234567",
  ]);

  await connection.endAsync();

  return;
};

let addUser = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();

  const sql =
    "INSERT INTO USER (USERNAME, PASSWORD, EMAIL, MOBILE) VALUES (?, ?, ?, ?)";
  await connection.queryAsync(sql, [
    input.username,
    input.password,
    input.email,
    input.mobile,
  ]);

  await connection.endAsync();

  return;
};

//addUserStatic();
addUser({
  username: "MYsqL",
  password: "mysql",
  email: "mysql@gmail.com",
  mobile: "12345667",
});

module.exports = { addUser, addUserStatic };
