import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MoviesComponent } from './movies/movies.component';
import { TVComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AllComponent } from './all/all.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailesComponent } from './movie-detailes/movie-detailes.component';
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MoviesComponent,
    TVComponent,
    PeopleComponent,
    NotFoundComponent,
    NavBarComponent,
    FooterComponent,
    AllComponent,
    MovieDetailesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
