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

let readAllUsers = async () => {
  const connection = mysql.createConnection(DB_CONFIG);

  // gettting the connection
  await connection.connectAsync();

  let sql = "SELECT * FROM USER";
  const results = await connection.queryAsync(sql, []);

  // releaseing the connection
  await connection.endAsync();

  return results;
};

let readUserById = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE ID=?";
  const results = await connection.queryAsync(sql, [input.id]);

  await connection.endAsync();

  console.log(results);
  return results;
};

let readUserByQuery = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE ID=? AND EMAIL=?";
  const results = await connection.queryAsync(sql, [
    input.id,
    input.email,
  ]);
  console.log(results);

  await connection.endAsync();

  return results;
};

// readUserById({ id: 3 });
// readUserByQuery({ id: 1, email: "hello@gamil.com" });

module.exports = { readAllUsers, readUserById, readUserByQuery };
