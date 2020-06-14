import {Component, OnInit} from '@angular/core';
import MovieDetails from '../models/Movie-Details';
import {MovieService} from '../services/movie.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id: string;
  movie: MovieDetails;
  movieGenres: string;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
      });

    this.movieService
      .getMovieById(this.id)
      .subscribe((data) => {
        this.movie = data;
        this.movieGenres = this.movie.genres.map(x => x['name']).join(' ');
      });
  }
}
