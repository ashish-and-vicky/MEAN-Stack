const fs = require("fs");
const Promise = require("bluebird");

// promisification :: converts all the callback methods and return as Promise
Promise.promisifyAll(fs);

let readDemo = () => {
  const filePath1 = "/Users/research/Desktop/tempo.txt";

  // Promise
  const mpromise = fs.readFileAsync(filePath1, { encoding: "utf-8" });
  console.log(mpromise);

  //for SUCCESS----the syntax here is quiet clear than the previous one
  mpromise.then((data) => {
    console.log(data);
  });
  //for FAILURE
  mpromise.catch((err) => {
    console.log(err);
  });
};

readDemo();
