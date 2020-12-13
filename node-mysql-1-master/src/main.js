const Promise = require("bluebird");
const mysql = require("mysql");

// Promisify the mysql
Promise.promisifyAll(require("mysql/lib/Connection").prototype); //this code is taken from bluebird website from API Reference, Promification to convert all methods in Promise
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let readAllUser = async () => {
  try {
    console.log("I.AM.ABOUT.TO.READ.DB");

    // STEP::1 :: CONNECT WITH DATBASE USNG CREDENTIAL----this code is taken from website...type node mysql...to get the format for various operations
    const connection = mysql.createConnection({ //'mysql' overhere is imported from mysql library
      host: "192.168.64.5",
      user: "mysql",
      password: "mysql",
      database: "DAC2020",
    });

    // connection.connect();  // normal method from mysql module---here we need to pass callback therefore we are not using this
    await connection.connectAsync(); // because of bluebird :: Promisified method---benifit here is we are waiting for the connection to get established....we could have written .then() there, but we have used async so...

    console.log("CONNECTION.SUCCESSFUL!!");

    await connection.endAsync();
  } catch (err) {
    console.log(err);
  }
};

readAllUser();
