const Promise = require("bluebird");
const mysql = require("mysql");

// Promisifying the mysql module methods.
Promise.promisifyAll(require("mysql/lib/Connection").prototype); //this code is taken from bluebird website from promification of bluebird
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let helloDatabase = async () => {
  const connection = mysql.createConnection({
    host: "192.168.64.5",
    user: "mysql",
    password: "mysql",
    database: "DAC2020",
  });

  // connection open
  await connection.connectAsync(); // promise

  // let query
  let sql = "SELECT * FROM USER";
  let results = await connection.queryAsync(sql);

  // close the connection---as it is a costly operation
  connection.end();

  console.log(results);
  return results;
};

helloDatabase();
