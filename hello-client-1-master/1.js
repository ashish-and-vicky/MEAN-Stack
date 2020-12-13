let registerUser = () => {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;

  if (username === "") { //username if empty then giving alert (input box becomes red)
    document.querySelector("#username").style.borderColor = "red";
    return;
  }

  // http://localhost:3000/adduser?username=hello&password=1234&email=hello@gmail.com
  /*let url = "http://localhost:3000/adduser?";
  url += "username=" + username + "&";
  url += "password=" + password + "&";
  url += "email=" + email + "&";
  url += "mobile=" + mobile;*/


  //through above code we can also provide user defined queries and below also
  let url = `http://localhost:3000/adduser?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;

  let xhr = new XMLHttpRequest(); //this is the 1st way of making AJAX call
  xhr.open("GET", url);
  xhr.onload = () => {
    const res = xhr.responseText;
    console.log(res);

    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mobile").value = "";
  };

  xhr.send();
};
// This is the prefered way as this contains promises
let registerUserVer1 = async () => { //this is the 2nd way of making AJAX call
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;

  let url = `http://localhost:3000/adduser?username=${username}&password=${password}&email=${email}&mobile=${mobile}`;

  // by default it makes GET call----rather than using code from line no. 23 to 27 and xhr.send we can use this
  await fetch(url);

  document.querySelector("#username").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#mobile").value = "";
};

let registerUsingPost = async () => {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;

  const input = {
    username: username, //it means that it is written in this way
    password,
    email,
    mobile,
  };
  const url = "http://localhost:3000/adduser";

  // http understands text
  await fetch(url, { //by default it takes GET. Therefore to take it as POST, we have to mention that in method with body and headers 
    method: "POST",
    body: JSON.stringify(input), //since http returns each method in the form of a string. Therefore body is stringifyed in JSON
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.querySelector("#username").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#mobile").value = "";
};

let formdataPost = async () => {
  const url = "http://localhost:3000/sample";
  const formData = new FormData();
  formData.append("k1", "v1");

  const response = await fetch(url, { method: "POST", body: formData });
  const result = await response.json();
  console.log(result);
};

let urlparmsPost1 = async () => {
  const url = "http://localhost:3000/sample";
  const urlParams = new URLSearchParams();
  urlParams.append("title", "Hello World");

  const response = await fetch(url, { method: "POST", body: urlParams });
  const result = await response.json();
  console.log(result);
};
