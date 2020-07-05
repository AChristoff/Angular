import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Furniture} from '../../shared/models/furniture';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  furniture: Furniture;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.furniture = this.route.snapshot.data['furnitureData'];
  }
}
