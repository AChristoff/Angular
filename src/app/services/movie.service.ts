import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import Movie from '../models/Movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=2e3c24fc938f2e5361bd46f6197c37d6';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + '/movie/popular' + API_KEY);
  }

  getInTheaterMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + '/discover/movie' + API_KEY + '&with_release_type2|3');
  }
}
