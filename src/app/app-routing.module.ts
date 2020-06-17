import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {SingleMovieResolver} from './services/resolvers/single-movie.resolver';
import {MovieSearchComponent} from './movie-search/movie-search.component';
import {MovieListResolver} from './services/resolvers/movie-list.resolver';
import {RegisterComponent} from './forms/register/register.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies'
  },
  {
    path: 'movies',
    component: MoviesComponent,
    resolve: {MovieListResolver},
  },
  {
    path: 'movies/search',
    component: MovieSearchComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
    resolve: {SingleMovieResolver},
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
