const fs = require("fs");

/**
 * Here we don't know which file will get executed 1st
 * 
 * Actually we want that File 1 should execute 1st followed by 2nd and 3rd i.e running multiple asynchronous in a sequential manner
 * Will Solve this Via Promise 0R Promise Chain
 */
let readFileDemo = () => {
  // Reading File 1
  const filePath1 = "/Users/research/Desktop/temp.txt"; //Actually we want that File 1 should execute 1st followed by 2nd and 3rd. Therefore we have put those other files inside a callback(Drawback of callbacks in next)
  fs.readFile(filePath1, { encoding: "utf-8" }, (err, data) => {
    // File 1 Done
    console.log("1", data);

    // Reading File 2
    const filePath2 = "/Users/research/Desktop/temp-1.txt";
    fs.readFile(filePath2, { encoding: "utf-8" }, (err, data) => {
      // File 2 Done
      console.log("2", data);

      // Reading File 3
      const filePath3 = "/Users/research/Desktop/temp-2.txt";
      fs.readFile(filePath3, { encoding: "utf-8" }, (err, data) => {
        // File 3 Done
        console.log("3", data);

        // Reading File 4
        const filePath3 = "/Users/research/Desktop/temp-2.txt";
        fs.readFile(filePath3, { encoding: "utf-8" }, (err, data) => {
          // File 3 Done
          console.log("3", data);

          // Reading File 4
          const filePath3 = "/Users/research/Desktop/temp-2.txt";
          fs.readFile(filePath3, { encoding: "utf-8" }, (err, data) => {
            // File 3 Done
            console.log("3", data);

            // Reading File 4
            const filePath3 = "/Users/research/Desktop/temp-2.txt";
            fs.readFile(filePath3, { encoding: "utf-8" }, (err, data) => {
              // File 3 Done
              console.log("3", data);

              // Reading File 4
              const filePath3 = "/Users/research/Desktop/temp-2.txt";
              fs.readFile(
                filePath3,
                { encoding: "utf-8" },
                (err, data) => {
                  // File 3 Done
                  console.log("3", data);
                }
              );
            });
          });
        });
      });
    });
  });
};

readFileDemo();
