import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Furniture} from '../../components/shared/models/furniture';
import {Observable} from 'rxjs';

const createUrl = 'http://localhost:5000/furniture/create';
const getAllUrl = 'http://localhost:5000/furniture/all';
const getSingleUrl = 'http://localhost:5000/furniture/details/';
const getUserFurnitureUrl = 'http://localhost:5000/furniture/user';
const deleteUrl = 'http://localhost:5000/furniture/delete/';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  constructor(private http: HttpClient) {
  }

  createFurniture(data) {
    return this.http.post(createUrl, data);
  }

  getAllFurniture(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(getAllUrl);
  }

  getFurnitureById(id): Observable<Furniture> {
    return this.http.get<Furniture>(getSingleUrl + id);
  }

  getUserFurniture(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(getUserFurnitureUrl);
  }

  deleteFurniture(id) {
    return this.http.delete(deleteUrl + id);
  }
}
