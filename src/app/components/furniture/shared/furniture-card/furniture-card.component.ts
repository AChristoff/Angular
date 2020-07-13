import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Posts} from '../../../shared/models/furniture';

@Component({
  selector: 'app-furniture-card',
  templateUrl: './furniture-card.component.html',
  styleUrls: ['./furniture-card.component.scss']
})
export class FurnitureCardComponent implements OnInit {

  @Input() furnitureInfo$: Observable<Posts[]>;
  @Input() isEdit: boolean;
  @Output() furnitureChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    console.log(this.furnitureInfo$);
  }

  emitId(id) {
    this.furnitureChange.emit(id);
  }
}
