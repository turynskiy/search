import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ErrorPageComponent } from './error-page/error-page.component';
import {RouterModule} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'error', component: ErrorPageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
