import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailesComponent } from './movie-detailes/movie-detailes.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { RegistrationComponent } from './registration/registration.component';
import { TVComponent } from './tv/tv.component';

const routes: Routes = [
  {path:"",redirectTo:"all",pathMatch:"full"},
  {path:"all",component:AllComponent},
  {path:"all/:p1",component:MovieDetailesComponent},
  {path:"movies",component:MoviesComponent},
  {path:"tv",component:TVComponent},
  {path:"people",component:PeopleComponent},
  {path:"login",component:LoginComponent},
  {path:"regis",component:RegistrationComponent},
  
  {path:"**",component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
