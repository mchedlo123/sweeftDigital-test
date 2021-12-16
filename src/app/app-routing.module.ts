import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {DetailPageComponent} from "./home/detail-page/detail-page.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    component: HomeComponent,
    path: 'home/:page',
  },
  {
    component: DetailPageComponent,
    path: 'home/user/:userid'
  },
  {
    path: '',
    redirectTo: 'home/1',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
