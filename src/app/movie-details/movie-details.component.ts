import {Component, OnInit} from '@angular/core';
import MovieDetails from '../models/Movie-Details';
import {MovieService} from '../services/movie.service';
import {ActivatedRoute, Params} from '@angular/router';
import {SingleMovieResolver} from '../services/resolvers/single-movie.resolver';

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
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.movie = this.route.snapshot.data['SingleMovieResolver'];
    this.movieGenres = this.movie.genres.map(x => x['name']).join(', ');

    // this.route.params
    //   .subscribe((params: Params) => {
    //     this.id = params['id'];
    //   });
    //
    // this.movieService
    //   .getMovieById(this.id)
    //   .subscribe((data) => {
    //     this.movie = data;
    //     this.movieGenres = data.genres.map(x => x['name']).join(', ');
    //     console.log(this.movie.genres);
    //   });
  }
}
