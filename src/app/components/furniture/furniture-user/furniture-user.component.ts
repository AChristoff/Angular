import {Component, OnInit} from '@angular/core';
import {FurnitureService} from '../../../core/services/furniture.service';
import {Observable} from 'rxjs';
import {Furniture} from '../../shared/models/furniture';

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit {
  userFurniture$: Observable<Furniture[]>;

  constructor(private furnitureService: FurnitureService) {
  }

  ngOnInit() {
    this.userFurniture$ = this.furnitureService.getUserFurniture();
  }

}
