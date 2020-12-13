const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "Sayali@123",
    database: "cdac",
};

let addRecord = async () => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    // LOGIC
    let sql =
        "INSERT INTO USER (NAME,ROLLNO,SAL) VALUES (?, ?, ?)";
    let operation = await connection.queryAsync(sql, [
        "Shruti ",
        "1",
        "30"
    ]);

    await connection.endAsync();
    return operation;
};

addRecord();