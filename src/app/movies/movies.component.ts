import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import Movie from '../models/Movie';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovies: Movie[];
  popMovSub: Subscription;
  inTheaterMovies: Movie[];
  upcomingMovies: Movie[];
  message: null;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.popMovSub = this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = data;
    });
    this.movieService.getInTheaterMovies().subscribe(data => {
      this.inTheaterMovies = data;
    });
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcomingMovies = data;
      console.log(data);
    });
  }

  fromChild(eventData) {
    this.message = eventData;
  }

}
