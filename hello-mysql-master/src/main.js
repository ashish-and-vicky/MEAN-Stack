const mysql = require("mysql");
const Promise = require("bluebird");

// promisify the mysql callback methods
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let checkDbConnection = async () => {
  console.log("DB.CONNECTION.CHECK.HERE");

  const connection = mysql.createConnection({
    host: "192.168.64.5", // localhost
    user: "mysql",
    password: "mysql",
    database: "mydb",
  });

  // connecting with database
  await connection.connectAsync();

  // LOGIC HERE;
  console.log("CONNECTION SCUCCESSFULE!!");

  let sql = "SELECT * FROM USER";
  const results = await connection.queryAsync(sql, []);
  console.log(results);

  // releaseing the connection
  await connection.endAsync();
};

checkDbConnection();
