/**
 * FS => INTERNAL MODULE
 *
 * What is...
 * PROMISE
 * ASYNC
 * AWAIT
 *
 * BLUEBIRD => EXTERNAL MODULE
 * MYSQL => External Module
 *
 * Start the node program in Background
 * node src/main.js &
 *
 * To Kill the NodeJS Background Server:-
 * 
 * ps -fax | grep 5600......i.e port number.....// this is done to know the server number
 * kill -9 $(lsof -t -i:3000 -sTCP:LISTEN)
 */

const http = require("http"); // This http is a module which is imported here from NodeJS to create a server...to know more such modules...refer NodeJS Documentation
const mod = require("./my.module");

//The block inside the create server is Asynchronous in nature
http.createServer((req, res) => {
        // CORS ENABLED (Cross Origin Request) means any one can or allowing other systems to request this server
        // res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
        res.setHeader("Access-Control-Allow-Origin", "*"); // * designates all the request from anywhere

        const myresponse = JSON.stringify(mod.list);

        // to send the response to the client completely and not in chunks which is done by .send();
        res.end(myresponse);
    })
    .listen(5600);

// Therefore we are creating a url at port 5600
    
   /* When we run the NodeJS by node src/main.js...then after that 
no commands can be writen....that means the server becomes on */