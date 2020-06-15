import {Component, OnInit} from '@angular/core';
import Movie from '../models/Movie';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchedMovies: Movie[];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const query = this.route.snapshot.queryParams['search'];
    this.movieService.searchMovie(query)
      .subscribe((data) => {
        this.searchedMovies = data['results'];
      });
  }
}
