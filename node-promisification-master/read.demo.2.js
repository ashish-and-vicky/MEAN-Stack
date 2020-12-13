const fs = require("fs");

const Promise = require("bluebird"); //This way we include bluebird in our project
Promise.promisifyAll(fs); // Promisification of File System Module is done here

let readDemo = () => {
  // fs.readFile();

  const filePath1 = "/Users/research/Desktop/temp.txt";
  // fs.readFileAsync(filePath1, { encoding: "utf-8" });----benifit of bluebird is we get this method from bluebird
  fs.readFileAsync(filePath1, { encoding: "utf-8" }) //.then() will read data of file 1. Through this we are avoiding the problem of callback inside callback..drawback of callback is that it puts lots of load on the server, so to avoid that we use bluebird methods that treat each function seperately. 
    .then((data) => {
      // file 1 done
      console.log(data);

      const filePath2 = "/Users/research/Desktop/temp.txt";
      return fs.readFileAsync(filePath2, { encoding: "utf-8" });
    })
    .then((data) => {
      // file 2 done
      console.log(data);

      const filePath3 = "/Users/research/Desktop/temp.txt";
      return fs.readFileAsync(filePath3, { encoding: "utf-8" });
    })
    .then((data) => {
      // file 3 done
      console.log(data);
    });
};

readDemo();
