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

let updateUserByQuery = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();

  const sql = "UPDATE USER SET USERNAME=? WHERE ID=?";
  await connection.queryAsync(sql, [input.username, input.id]);

  await connection.endAsync();
};

let deleteUserByQuery = async (input) => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();

  let sql = "DELETE FROM USER WHERE ID=?";
  await connection.queryAsync(sql, [input.id]);

  await connection.endAsync();
};

//updateUserByQuery({ username: "New Username", id: 7 });
// deleteUserByQuery({ id: 8 });

module.exports = { updateUserByQuery, deleteUserByQuery };
