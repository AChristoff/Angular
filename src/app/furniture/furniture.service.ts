import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const createUrl = 'http://localhost:5000/furniture/create';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  constructor(private http: HttpClient) { }

  createFurniture(data) {
    return this.http.post  (createUrl, data);
  }
}
