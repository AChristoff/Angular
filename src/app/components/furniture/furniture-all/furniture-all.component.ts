import {Component, OnInit, ViewChild} from '@angular/core';
import {Posts} from '../../shared/models/furniture';
import {FurnitureService} from '../../../core/services/furniture.service';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.scss']
})
export class FurnitureAllComponent implements OnInit {
  @ViewChild('form') searchForm: NgForm;
  furniture$: Observable<Posts[]>;

  constructor(private furnitureService: FurnitureService, private router: Router) {
  }

  ngOnInit() {
    this.furniture$ = this.furnitureService.getAllFurniture();
  }

  search() {
    const query = this.searchForm.value.query;
    this.router.navigate(['/dogs/search'], {queryParams: {search: query}});
  }

}
