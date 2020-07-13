import {Component, OnInit} from '@angular/core';
import {Posts} from '../../shared/models/furniture';
import {FurnitureService} from '../../../core/services/furniture.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.scss']
})
export class FurnitureAllComponent implements OnInit {

  furniture$: Observable<Posts[]>;

  constructor(private furnitureService: FurnitureService) {
  }

  ngOnInit() {
    this.furniture$ = this.furnitureService.getAllFurniture();
  }

}
