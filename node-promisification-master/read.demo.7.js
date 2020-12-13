const fs = require("fs");

const Promise = require("bluebird");
Promise.promisifyAll(fs);
//Now previously we were facing the problem of exceptional handling (try, catch block). Therefore to remove that we are now writing 'async' so that if one method executes properly only then the next will execute without any success ir error
let readDemo = async () => {
  console.log("Hello Async Await");

  const filePath1 = "/Users/research/Desktop/temp.txt"; //'await' will wait for one process to complete, then jump to the next one. But this can also be done by .readFileSync? ANS=> It is for conditions when we want some proceses of async property to behave synchronously
  const data1 = await fs.readFileAsync(filePath1, { encoding: "utf-8" }); //this avoids the problem of nexting and callbacks
  console.log(data1);

  const filePath2 = "/Users/research/Desktop/temp-1.txt";
  const data2 = await fs.readFileAsync(filePath2, { encoding: "utf-8" });
  console.log(data2);

  const filePath3 = "/Users/research/Desktop/temp-2.txt";
  const data3 = await fs.readFileAsync(filePath3, { encoding: "utf-8" });
  console.log(data3);
};

readDemo();
