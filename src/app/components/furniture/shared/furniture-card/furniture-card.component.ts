import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Furniture} from '../../../shared/models/furniture';

@Component({
  selector: 'app-furniture-card',
  templateUrl: './furniture-card.component.html',
  styleUrls: ['./furniture-card.component.css']
})
export class FurnitureCardComponent implements OnInit {

  @Input() furnitureInfo$: Observable<Furniture[]>;
  @Input() isEdit: boolean;
  @Output() furnitureChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  emitId(id) {
    this.furnitureChange.emit(id);
  }
}
