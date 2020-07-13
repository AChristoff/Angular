import {Component, OnInit} from '@angular/core';
import {FurnitureService} from '../../../core/services/furniture.service';
import {Observable} from 'rxjs';
import {Posts} from '../../shared/models/furniture';

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.scss']
})
export class FurnitureUserComponent implements OnInit {
  userFurniture$: Observable<Posts[]>;
  id: string;

  constructor(private furnitureService: FurnitureService) {
  }

  ngOnInit() {
    this.userFurniture$ = this.furnitureService.getUserFurniture();
  }

  deleteFurniture(id) {
    this.furnitureService.deleteFurniture(id).subscribe(() => {
      this.userFurniture$ = this.furnitureService.getUserFurniture();
    });
  }
}
