const fs = require("fs");

let readFileDemo = () => {
  // Reading File 1
  const filePath1 = "/Users/research/Desktop/temp.txt";
  fs.readFile(filePath1, { encoding: "utf-8" }, (err, data) => {
    console.log("1", data);
  });

  // Reading File 2
  const filePath2 = "/Users/research/Desktop/temp-1.txt";
  fs.readFile(filePath2, { encoding: "utf-8" }, (err, data) => {
    console.log("2", data);
  });

  // Reading File 3
  const filePath3 = "/Users/research/Desktop/temp-2.txt";
  fs.readFile(filePath3, { encoding: "utf-8" }, (err, data) => {
    console.log("3", data);
  });
};

readFileDemo();
