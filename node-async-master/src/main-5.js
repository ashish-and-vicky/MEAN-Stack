let fs = require("fs");

let Promise = require("bluebird");
//here Primose is helping us to get new method from previous callback method in the form of asynchrounos o/p => promise based method;
Promise.promisifyAll(fs);

const filePath = "/Users/research/Desktop/temp.txt";
fs.readFileAsync(filePath, { encoding: "utf-8" })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
