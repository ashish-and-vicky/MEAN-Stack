let hello = async () => {
  console.log("I.AM.HELLO");

  return "HELLOOOO";
};

hello().then((data) => {
  console.log(data);
});
