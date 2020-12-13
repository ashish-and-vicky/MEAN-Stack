// Read Again
const fs = require("fs");

let readDemo = () => {
  const filePath = "/Users/research/Desktop/temp.txt";

  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    console.log(data);
  });
};

/**Here callback is:-
 * Difficult to Understand the FLOW :: NON BLOCKING.
 * Excption Handling Becomes Difficult.
 *
 * Callback inside Callback
 */
let readDemo1 = () => {
  try {
    const filePath = "/Users/research/Desktop/temp1.txt";

    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
      console.log(err);
      console.log(data);
    });
  } catch (err) {
    console.log(err);
  }
};

readDemo1();


/*
path <string> | <Buffer> | <URL> | <integer> filename or file descriptor
options <Object> | <string>
  encoding <string> | <null> Default: null
  flag <string> See support of file system flags. Default: 'r'.
  signal <AbortSignal> allows aborting an in-progress readFile
callback <Function>
  err <Error>
  data <string> | <Buffer>

*/