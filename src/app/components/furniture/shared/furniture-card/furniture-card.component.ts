import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Furniture} from '../../../shared/models/furniture';
import {FurnitureService} from '../../../../core/services/furniture.service';

@Component({
  selector: 'app-furniture-card',
  templateUrl: './furniture-card.component.html',
  styleUrls: ['./furniture-card.component.css']
})
export class FurnitureCardComponent implements OnInit {

  @Input() furnitureInfo$: Observable<Furniture[]>;
  @Input() isEdit: boolean;

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
  }

  deleteFurniture(id) {
    this.furnitureService.deleteFurniture(id).subscribe(() => {
      this.furnitureInfo$ = this.furnitureService.getUserFurniture();
    });
  }
}
