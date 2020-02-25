import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavComponent } from './nav/nav.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
{path:'main', component:MainComponent},
{path:'navigation', component:NavigationComponent},
{path:'nav', component:NavComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
