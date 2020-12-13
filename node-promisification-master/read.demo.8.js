const fs = require("fs");

const Promise = require("bluebird");
Promise.promisifyAll(fs); // promisification

let readDemo = async () => { //but if we want exception handling, then that also becomes easier
  try {
    console.log("Hello Async Awai");

    const filePath1 = "/Users/research/Desktop/tempooo.txt";
    const data1 = await fs.readFileAsync(filePath1, { encoding: "utf-8" }); //sometimes we want synchronous process in a asynchronous process. Therefore 'await' is used.
    console.log(data1);

    const filePath2 = "/Users/research/Desktop/temp-1.txt";
    const data2 = await fs.readFileAsync(filePath2, { encoding: "utf-8" });
    console.log(data2);

    const filePath3 = "/Users/research/Desktop/temp-2.txt";
    const data3 = await fs.readFileAsync(filePath3, { encoding: "utf-8" });
    console.log(data3);
  } catch (err) {
    console.log(err);
  }
};

readDemo();
