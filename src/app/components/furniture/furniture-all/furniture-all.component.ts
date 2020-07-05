import {Component, OnInit} from '@angular/core';
import {Furniture} from '../../models/furniture';
import {FurnitureService} from '../../../core/services/furniture.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {

  furniture$: Observable<Furniture[]>;

  constructor(private furnitureService: FurnitureService) {
  }

  ngOnInit() {
    this.furniture$ = this.furnitureService.getAllFurniture();
  }

}
