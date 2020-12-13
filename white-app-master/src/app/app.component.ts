import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'white-app';

  constructor(private router: Router) {} //In C++ we create constructor by class name, but JS/TS we do that by constructor keyword----here we mention the access specifier inside the brackets(router is a datatype here)-----Router comes from above import statement

  // break;
  gotoPage(page) {
    // this.router.navigate(['4']);
    this.router.navigate([page]); //page is taken in array because we can navigate page to page
  }
}
