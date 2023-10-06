import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovisListComponent } from './components/movies/movis-list/movis-list.component';
import { MovisDetailsComponent } from './components/movies/movis-details/movis-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
 
  {
    path:'home',
    component: HomeComponent
  }, 
  {
    path: 'movies',
    component: MovisListComponent
  },
  {
    path: 'movie/:movieId',
    component: MovisDetailsComponent

  },
  { path: 'movies', 
    component:  MovisListComponent 
  }, 
  { 
    path: 'login', component: LoginComponent
  },
  {
    path: '**',
    pathMatch:'full',
    redirectTo: 'home'
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
