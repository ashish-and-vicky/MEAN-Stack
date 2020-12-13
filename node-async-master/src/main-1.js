// ASYNC :: NON BLOCKING
let helloWorld = async () => {
  for (let i = 0; i < 100; i++) {
    console.log("I am annonymous function!!");
  }
  console.log("I AM DONE!!");
};

// ASYNC :: NON BLOCKING
let helloUniverse = async () => {
  for (let i = 0; i < 100; i++) {
    console.log("I am ALSO function!!");
  }
};

helloWorld();
helloUniverse();
