import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Furniture} from '../models/furniture';
import {Observable} from 'rxjs';

const createUrl = 'http://localhost:5000/furniture/create';
const getAll = 'http://localhost:5000/furniture/all';
const getSingle = 'http://localhost:5000/furniture/details/';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  constructor(private http: HttpClient) {
  }

  createFurniture(data) {
    return this.http.post(data, createUrl);
  }

  getAllFurniture(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(getAll);
  }

  getFurniture(id): Observable<Furniture> {
    return this.http.get<Furniture>(getSingle + id);
  }
}
