import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

const routes: Routes = [
  { path: '1', component: Page1Component }, //after <router-outlet></router-outlet>, path is mentioned here for different pages----Page1Component component is written from in above import tag
  { path: '2', component: Page2Component }, //values in path is the routing part which needs to be added in the url 
  { path: '3', component: Page3Component },
  { path: '4', component: Page4Component },
  { path: '', redirectTo: '/2', pathMatch: 'full' }, // making one of the page :: default page :: redirecting there(when page is blank, then it redirects us to path 2)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
