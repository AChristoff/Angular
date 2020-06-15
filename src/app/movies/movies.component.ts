import {Component, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';
import Movie from '../models/Movie';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {MovieListResolver} from '../services/resolvers/movie-list.resolver';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovies: Movie[];
  inTheaterMovies: Movie[];
  upcomingMovies: Movie[];
  message: null;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const [theater, popular, upcoming] = this.route.snapshot.data.MovieListResolver;

    this.popularMovies = popular;
    this.inTheaterMovies = theater;
    this.upcomingMovies = upcoming;
  }

  fromChild(eventData) {
    this.message = eventData;
  }

}
