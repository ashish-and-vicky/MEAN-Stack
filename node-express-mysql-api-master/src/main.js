const express = require("express");
const cors = require("cors"); //written to enable the cors policy so that any user an hit our url
//const bodyParser = require("body-parser");---or the below method
const multer = require("multer");

const app = express(); //here we are creating an object or instance of express as written in the documentation https://expressjs.com/en/starter/hello-world.html

// Middelware :: Programs :: Which runs in advance.
app.use(cors()); // unblocking cors policy---.use() is necessay to tell server we are using it
//app.use(bodyParser.json());---this will help to read the data comming in body---or below method
app.use(express.json()); //this will help to read data comming in the body BODY from Text to JSON
app.use(express.urlencoded({ extended: true })); // BODY :: URL ENCODED
const upload = multer(); // BODY :: FORM DATA

const dbadduser = require("./db.add.user");

// http://localhost:3000/welcome------it takes 2 params :: 1st is 'path' & 2nd is callback----it is in our language(developer community) called as an API
app.get("/a", (req, res) => { //here this 'get()' method takes a callback for GET request-----'req'-> is the request we are doing---'res'-> is the response we are getting from the server
  res.json({ title: "Welcome!!" }); //because we want response in the form of json
});

// created an GET API
// learnt how to read the input; coming from client.
// http://localhost:3000/adduser?username=hello
app.get("/adduser", async (req, res) => {
  try {
    
    const input = req.query; //reads the input provided to it i.e hello

    // calling db logic :: async :: non blocking
    await dbadduser.addUser(input); //input is read here and passed to database in another file
    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "failure" });
  }
});
 
// POST API :: FOR TESTIG POSTMAN :: ANDROID :: IOS :: BROWSER
// http://localhost:3000/adduser
app.post("/adduser", async (req, res) => { //using POSTMAN for this
  try {
    const input = req.body; //requesting to receive the body(JSON) here---before doing this use line no 11 app.use(express.json());

    await dbadduser.addUser(input);
    res.json({ message: "success post" });
  } catch (err) {
    res.json({ message: "failure post" });
  }
});

app.post("/auth-user", async (req, res) => {
  try {
    const input = req.body;

    await dbadduser.authenticateUser(input);
    res.json({ opr: true });
  } catch (err) {
    res.json({ opr: false }); //this will happen when line 43 of db.add.user.js throws an exception 
  }
});

app.post("/sample", upload.none(), async (req, res) => {
  res.json(req.body);
});

// started the server.
app.listen(3000);
