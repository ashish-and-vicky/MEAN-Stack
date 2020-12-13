# Mean


# Day 15
- What is NodeJS?
- Server Side Programming (It can connect with DB) vs Client Side Programming
- The JS in NodeJS does not only define that it can be used only in client side
- Backend Engineer vs Front End Engineer
- We can use Javascript in server environment, apart from Browser only.
- It is Asynchronous in Nature.

- NodeJS vs (JAVA[Servlet, JSP], PHP, ASP, .NET, Ruby Rail)
- Older Generation does not Understand what is callback
-Advantage or  Disadvantage (Programming Style / Structure) :: [Scripting Language]


Install NodeJSfrom its website and Entension of NodeJS Snippets from VS code

open terminal:

>node -v      //shows version of NodeJS

>npm -v    //shows version of Node Package Manager


click on the left bottom of VS code to open terminal
make sure the type of terminal in use is not powershell


If any error occurs:-

Ctrl + P---> Select default Cmd or Command Shell

> npm init   // to initialize node js...through we are trying to solve Programming Style / Structure problem

> Enter		//this will create a package.json file

Create a file with .js file in it

We are following Naming Convention for file as:-
-small case
-avoid special char.(space also)
-will follow . to add multi word filename
-MAIN Program=> index.js first file or main.js


Note: Run all the above commands in the present folder where you are working or where the .js file is

Create an index.js file

write......console.log("Hello World"); in it


Now, to run this 

> node <folder-name>/<file-name>.....//>node src/index.js...OP is shown in terminal
> node <folder-name>/<file-name> &........as soon as we add '&' the server will be started in the backend..
        i.e if we swith off the  PC   then server will be on 
Now,

create another js file....1.js
====================================================

function helloWorld(){
	console.log('I am Named Function');
}

helloWorld();

=========================================================

Here, we can pass any type structure eg JSON, int, float, XML



What is Module? and Module Management?

==> It is the connection/import, export of files with each other using module.export & require keyword



In createServer part....when we create it and then type node <folder-name>/<file-name> then server gets started.

After this try to type the port no with localhost:<port-no> in the browser to see the OP.



What is the importance of a project file?

==> It contains the package.json file which makes it special.


All the variables and functions are private in nature.


In our file my.module.2.js....we write module.exports.MY_APP_NAME = APP_NAME;
...where MY_APP_NAME is obtained as a key value pain in other file.



To normal objects also it will take it as key value pairs.



Using NodeJS we can also read a file by....const fs = require("fs");.......to know more about this, goto nodejs website in FileSystem section


difference between fs.readFile(); and fs.readFileSync(); is that fs.readFile(); is Asynchrounus i.e non-blocking and fs.readFileSync(); synchrounus i.e blocking.

All these packages are installed from website called npm

# Bluebird
> npm install bluebird

bluebird is a module (search on google to know the syntax and how to initialize it) or package or library to include 'Promise' or 'Promises' in our library to run asynchronous functions in a synchronus way

There are 4 kinds of module--Local Module, Internal Module, External Module & Global Modula

# MYSQL

> npm install mysql




# Express 

> npm install express

It is an external module.
It is a NodeJS framework which is used to create a server

The client will communicate to the server using http

Previously we were creating server using....const http = require("http");....this is an old method

Now we are creating using express....const express = require("express")
Internally in express...http method is called

'req'-> is the request we are doing---'res'-> is the response we are getting from the server


To create a API-:
##
const express = require("express"); ----import express
const app = express(); ----create it's object

app.get("/",(req, res) => {
        const json ={ title : "Sample Response"}
        res.json(json;)----to get response from server
});

app.listen(3000);
##

Now to pass anything in the url type-----localhost:3000/

for POST method===> Download Postman===> click the '+' button on top or Directly enter the url===>Enter the localhost url created for post request and select POST method====> Goto the 'Body' section===> Goto 'raw' below===>Select JSON from the drop down(for passing JSON as post)

Use these :-

const bodyParser = require("body-parser");---or the below method
const multer = require("multer");

app.use(bodyParser.json());---this will help to read the data comming in body---or below method
app.use(express.json()); // BODY :: RAW :: JSON

const input = req.body; //requesting to receive the body(JSON) here


Goto Express JS website for more


## CORS

http://expressjs.com/en/resources/middleware/cors.html

>npm install cors -----this is done so that any user can hit our url

const cors = require("cors"); //written to enable the cors policy so that any user an hit our url

app.use(cors()); // unblocking cors policy---.use() is necessay to tell server we are using it

Why should we not promisify express methods?


# Hello Angular - Google Product

- Client Side
- Mobile App / Desktop / Web App as well.
- Framework
- SPA
- Modularity (Module/Component)
- Typescript :: Javascript
- Component

# Keep in your Mind

- Javascript
- Typescript = (Javascript + DataType)
- NodeJS (Server Side)
- ExpressJS (Server Side)
- Angular (Client)

```
int n = 10;
let n = 10;
```

In Typescript, to export file:-

export = <function-name>  or  export {<function-name>};

to import file:-

import {<function-name>} from ".<file-name>";


# Angular Project Setup

Goto https://angular.io/guide/setup-local for more info of how to setup the project

Run the below command in the terminal and not in a folder as it is a global module

> npm install -g @angular/cli ------------------to install Angular components---if error occurs while installing then
> sudo -i npm install -g @angular/cli ------------enter the password this(ashish)

- '-g' means Global Module
- @angular/cli is the name of the package

> ng --version or ng -v ----------------to check Angular version---if error occurs in displaying the version then go to that path where you installed angular and there check version. Below are thr command for doing so

> npm config ---------to display command list
> npm config list ------to display other details eg. path of where angular is getting installed---it is used for checking the path---if path is not right then 

* To get path in another way
> npm list config  or  npm config get prefix

> cd <path> ----then--- 'npm install -g @angular/cli' to install or to check the version---- './ng --version'


* To setup project:-

> ng new <file/project-name>  or  ng new <file/project-name> --skip-install -------------the 2nd command will skip some of the components (modules & internal libraries) which can be installed afterwards with command 'npm install'

- Now press Enter for CSS


After installation, open the that folder in VS code

In terminal of VS Code

> npm install ---------------this will download all the dependencies of angular

Now goto the file path in terminal


> npm start  or  ng serve ---------------to start that project(<file>) by going to that file using cd <path-name-with-project-name> ----it will show all the link above to be opened

> npm cache clean --force ----------to clear cache if any error occurs in Command Prompt

> ng g component <name>  or  ng g c <name>  or  ng g c <name> --skipTests to generate new component, component is a reusable UI --------to know more goto angular website in CLI Command Reference section in the left (ng generate)

** Note: Try to run one project at a time (because of port occupency)


# Bootstrap in Project

> npm i bootstrap --------hence in package.json in dependencies these bootstrap will be added

Now goto style.css and type ----- @import "~bootstrap/dist/css/bootstrap.css"; ----while we install bootstrap then a folder is installed. That folder is which we are importing here


To Install bootstrap for Angular goto 'ng bootstrap' website and paste the command in Terminal


# Font Awesome in Angular

To add font awesome type Angular Font Awesome in its website in the Docs section in right side select Angular. Then select GitHub project for commands

- To Add Font Awsome Module

```
ng add @fortawesome/angular-fontawesome@0.7
```
Now,

-Import in the page1.component.ts
-In export in the same file mention the things imported and use it
-Declare the icons in the html file to use it

Select all components using Spacebar



[] ---> is used for Attribute Binding....eg <fa-icon [icon] ="faAmbulance" ></fa-icon>


# Service in project

> ng g service <name>-------

Services are independent of components

Services are the shared features across the components
================================================================================================= 

A default class 'AppComponent' is generated in app.component.ts file while we initialize the project. This class is like other general programming languages like C, C++ etc.

{{""}} => is called as Data Binding

() => Event Binding


For each loop in app.component.html------i.e we can also add logic in the html file using angular attributes 

<div *ngFor="let <our-variable-name> of <app.component.ts-variable-name">{{ <our-variable-name> }}</div>


<button (click)="<class-function-name>"> {{<class-variable-name>}} </button>

While doing Data Binding inside the html tags eg. placeholder = "{{ variable }}" we have/ can put it in double quotes  or  [placeholder] = "variable" put the html tag name in '[]'----when we do this, then the variable name here will be looked in app.component.ts file inside a class

- We always need to instantiate the form module before use eg. task = new FormControl(); ---FormControl comes from ReactiveFormsModule module of angular

eg. app.component.ts:-

 taskList = [];

addTask(){
        const newTask = this.task.value;
        this.taskList.push(newTask);
}

app.component.html:-

<input type = "button" [value]="btnTitle" (click)="addTask()" />


* Install NX Console Extension in VS Code from Extensions for Angular:-

@Component in html file is called as Meta Information

In index.html file & in @Component there is a selector with <app-data> tag. This tag is reusable in any other html file but not in its same component file


For Adding images to html goto picsum.photos

style.css is the general/global CSS file for that particular project 

What is a Module?
=> It is a mixture of Component/Services/Pipe/Directive

app.module.ts consist of all the components of that particular project----by the tag @NgModule we are able to identfy that this file is a module----this is a component information holder---inside it there is 'bootstrap' which tells thats it's the starting point and not the other bootstrap----we can also select any other starting point from the declaration above it.


in @NgModule there is imports -----it keeps app the angular modules and not the local modules. ----These modules are reusable modules
----We will be using--------import { ReactiveFormsModule } from "@angular/forms"; & import { HttpClientModule } from "@angular/common/http";

-----In import { ReactiveFormsModule } from "@angular/forms"; we will gwt form input elements

-----In import { HttpClientModule } from "@angular/common/http"; we will get Ajax call in this module which runs



By default we have a Angular server which when we start by 'npm start' which compiles the Typescript type of file to JS ehich our browser understand. Therefore we do not use GoLive server to run that angular project


* <router-outlet></router-outlet> is a tag which we need to write in app.component.html (root html component) if we want our app to be multipaged. The routing is done in the app.routing.module.ts

===============================================================================================================================

# Orange App

UI is in orange-app-sir -------Run this first by npm start

Its backend is in node-express-mysql -------then run this from npm start or run by using Debugger(select NodeJS in it) and mysql (we can also start the server by Postman)---put the values in the login window and select login---then put break point o it----check by hover on req.body




# To Clone from Git Repository

- copy the url of the repository
- press Ctrl + Shift + P
- type clone----select Git:Clone and paste the url in it----save to the desired location
- open ----in terminal---npm install(to run) 

