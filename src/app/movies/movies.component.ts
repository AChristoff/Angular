import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovies: Array<Movie>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(data => {
      this.popularMovies = data;
      console.log('popular movie' + this.popularMovies);
    });
  }

}
