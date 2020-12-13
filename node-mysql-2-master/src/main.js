//In terminal we have to execute this file by node src/main.js

const dbread = require("./db.read");
const dbadd = require("./db.add");

dbread.readUserByQueryParams(1, "onkar@gmail.com");

// dbread.readAllUser();
// dbread.readUserByQuery();

// dbadd.addRecord();

// dbadd.addRecordWithParam(
// "Ashish Sharma",
// "ashish",
// "ashish@gmail.com",
// "89566556259"
// );

// dbadd.addRecordWithJsonParam({ -----if extra columns are added in the the DB through Alter table command then we can take the column values from here by first adding over here 
//     email: "ashish@gmail.com",
//     mobile: "9853213231",
//     password: "Vixhsk4545",
//     username: "ashish4563",
//     city: "Nagpur",
//     state: "Maharashtra",
// });
