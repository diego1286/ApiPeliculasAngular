import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { MovisListComponent } from './components/movies/movis-list/movis-list.component';
import { MovisDetailsComponent } from './components/movies/movis-details/movis-details.component';
import {  HttpClientModule } from '@angular/common/http';
import { MovieButtonComponent } from './components/movies/movie-button/movie-button.component';
import { SessionComponent } from './components/session/session.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovisListComponent,
    MovisDetailsComponent,
    MovieButtonComponent,
    SessionComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
