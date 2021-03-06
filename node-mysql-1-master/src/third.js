const Promise = require("bluebird");
const mysql = require("mysql");

// Promisifying the mysql module methods.
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = { //this code is taken from website node js my sql from GitHub
  host: "192.168.64.5",
  user: "mysql",
  password: "mysql",
  database: "DAC2020",
};

let helloDatabase = async () => {
  const connection = mysql.createConnection(DB_CONFIG);

  // connection open
  await connection.connectAsync(); // promise

  // let query
  let sql = "SELECT * FROM USER";
  let results = await connection.queryAsync(sql);

  // close the connection
  connection.end();

  console.log(results);
  return results;
};

let readByQuery = async () => {
  const connection = mysql.createConnection(DB_CONFIG);
  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE ID=2"; //we are hardcoding here...but this increases the chances of phishing attacks..therefore to avoid that we use used defined queries below
  let results = await connection.queryAsync(sql);

  connection.end();
  return results;
};

let readByQuery1 = async () => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE ID=?";
  let result = await connection.queryAsync(sql, [1]);

  await connection.endAsync();
  return result;
};

let readByQuery2 = async () => {
  const connection = mysql.createConnection(DB_CONFIG);

  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE ID=? AND EMAIL=?";
  let result = await connection.queryAsync(sql, [1, "onkar@gmail.com"]);

  await connection.endAsync();
  return result;
};

readByQuery2();


//if DB is not getting connected then use this query

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
