/**
 * Asynchronous Function always returns Promise.
 * we provide Asynchronous Function because we don't know when will the server return our call ...in normal nodejs we used callback which may take a long time and block other processes
 * 
 * therefore to get o/p....
 */
let hello = async () => {
  console.log("I.AM.HELLO");

  return "HELLOOOO";
};

// RULE OF PROMISE
let mpromise = hello();

//Rule 1 - resolve :: handling success :: Handling output-----we provide .then()...to handle success...i.e to convert blocking to unblocking
mpromise.then((data) => {
  console.log(data);
});

//Rule 2 - ERROR :: REJECT :: HANLDING ERROR----hence to handle failure of promise, we use .catch()
mpromise.catch((err) => {
  console.log(err);
});
