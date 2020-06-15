import {Injectable} from '@angular/core';

import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import {MovieService} from '../movie.service';
import Movie from '../../models/Movie';
import {forkJoin} from 'rxjs';

@Injectable()
export class MovieListResolver implements Resolve<Array<Movie[]>> {

  constructor(
    private movieService: MovieService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return forkJoin(
      this.movieService.getInTheaterMovies(),
      this.movieService.getPopularMovies(),
      this.movieService.getUpcomingMovies(),
    );
  }
}
