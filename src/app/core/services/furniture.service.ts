import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Posts} from '../../components/shared/models/furniture';

const createUrl = 'http://localhost:3000/blog/post/create';
const getAllUrl = 'http://localhost:3000/blog/posts/all';
const getSingleUrl = 'http://localhost:3000/blog/post/';
const getUserFurnitureUrl = 'http://localhost:3000/blog/posts';
const deleteUrl = 'http://localhost:3000/furniture/delete/';
const editUrl = 'http://localhost:3000/blog/post/edit/';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  constructor(private http: HttpClient) {
  }

  createFurniture(data) {
    return this.http.post(createUrl, data);
  }

  editFurniture(data, id) {
    return this.http.put(editUrl + id, data);
  }

  getAllFurniture(): Observable<Posts[]> {
    return this.http.get<Posts[]>(getAllUrl);
  }

  getFurnitureById(id): Observable<Posts> {
    return this.http.get<Posts>(getSingleUrl + id);
  }

  getUserFurniture(): Observable<Posts[]> {
    return this.http.get<Posts[]>(getUserFurnitureUrl);
  }

  deleteFurniture(id) {
    return this.http.delete(deleteUrl + id);
  }
}
