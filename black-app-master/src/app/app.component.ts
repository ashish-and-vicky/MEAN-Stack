import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { consoleTestResultHandler } from 'tslint/lib/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit { //OnInit provides ngOnInit() method which is loaded when the program is compiled (press Ctrl + Space to know more)
  public title = 'black-app';
  public list: any = [];

  // Services :: Injection :: Singelton :: Short Syntax
  /*
  private http: HttpClient;
    constructor(http: HttpClient)-------this (http: HttpClient) came while we imported HttpClient above---checkout the angular website in Built in Features-> in HttpClient
    {
    this.http = http;
    }
  */
  constructor(private http: HttpClient) {}

  public ngOnInit() { //ngOnInit is a interface which is loaded when the program is compiled 
    console.log('ON.INIT.');
    this.makeAjaxCall();
  }

  async makeAjaxCall() { //in angular we directly have a method to make an ajax call....but before doing this we need to learn to add the HttpClient above
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const results = await this.http.get(url).toPromise(); //toPromise is a method provided in Angular for promise
    this.list = results;
  }

  async makePostApiCall() { //for making post call angular provides us this method
    const userJson = {
      username: 'Akshay Kumar',
      email: 'akshay@gmail.com',
      password: '1234',
      mobile: '1233456',
    };

    const url = 'http://localhost:3000/adduser';
    const output = await this.http.post(url, userJson).toPromise(); //hover on the .post to see the parameters in its ()...benifit here is that we don't have to stringify here
    console.log(output);
  }
}

//Download debugger for chrome extension from Extensions for debugging in Angular project 
