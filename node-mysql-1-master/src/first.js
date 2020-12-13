const Promise = require("bluebird");
const mysql = require("mysql");

// Promisifying the mysql module methods.
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let helloDatabase = async () => {
  const connection = mysql.createConnection({
    host: "192.168.64.5",
    user: "mysql",
    password: "mysql",
    database: "DAC2020",
  });

  // connection open---.connectAsync() is used here as we are using bluebird functionalities 
  await connection.connectAsync(); // promise----we are using promise over here i.e 'await' because we want that connection should be established first then query should be fired.

  console.log("CONNECTION.SUCCESS");

  // close the connection
  connection.end();
};

helloDatabase();
