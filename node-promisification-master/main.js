// READ THE FILE
const fs = require("fs"); //Using NodeJS we can also read a file by....const fs = require("fs");.......to know more about this, goto nodejs website in FileSystem section

/**
 * Simpleer to Explain
 * There is no Asynchronous :: Non Blocking
 *
*/
let readDemoWithException = () => { //for error handling this program is written in try catch
  try {
    const filePath = "/Users/research/Desktop/teemp.txt";
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" }); //before is the syntax of how to provide this...this means that if an error comes then it will come here and same with data

    console.log(fileContent);
  } catch (err) {
    console.log("There is some problem", err.message);  //err.message is extra here....it gives the actual problem in a user friendly way
  }
};

let readDemoWithoutException = () => {
  const filePath = "/Users/research/Desktop/teemp.txt";
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

  console.log(fileContent);
};

readDemoWithException();
