const Promise = require("bluebird");
const mysql = require("mysql");

// Promisifying the mysql module methods.
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "Sayali@123",
    database: "cdac",
};

let helloDatabase = async () => {
    const connection = mysql.createConnection(DB_CONFIG);

    // connection open
    await connection.connectAsync(); // promise

    // let query
    let sql = "SELECT * FROM USER where sal=?";
    let results = await connection.queryAsync(sql, [44]);

    // close the connection
    connection.end();

    console.log(results);
    return results;
};