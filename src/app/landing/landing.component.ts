import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import Movie from '../models/Movie';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  @ViewChild('form') searchForm: NgForm;
  searchedMovies: Movie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
  }

  search() {
    const query = this.searchForm.value.query;
    this.movieService.searchMovie(query)
      .subscribe((data) => {
        this.searchedMovies = data['results'];
      });
  }

}
