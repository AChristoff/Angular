import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FurnitureService} from '../../../core/services/furniture.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Furniture} from '../../shared/models/furniture';

@Component({
  selector: 'app-furniture-edit',
  templateUrl: './furniture-edit.component.html',
  styleUrls: ['./furniture-edit.component.css']
})
export class FurnitureEditComponent implements OnInit {
  furniture: Furniture;
  form: FormGroup;
  action: string;
  id: string;

  constructor(private fb: FormBuilder,
              private furnitureService: FurnitureService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.action = 'edit';
    this.furniture = this.route.snapshot.data['furnitureData'];
    this.form = this.fb.group({
      make: [this.furniture.make, [Validators.required, Validators.minLength(4)]],
      model: [this.furniture.model, [Validators.required, Validators.minLength(4)]],
      year: [this.furniture.year, [Validators.required, Validators.min(1950), Validators.max(2050)]],
      description: [this.furniture.description, [Validators.required, Validators.minLength(10)]],
      price: [this.furniture.price, [Validators.required, Validators.min(0)]],
      image: [this.furniture.image, [Validators.required]],
      material: [this.furniture.material, [Validators.nullValidator]],
    });

    this.route.params.subscribe((data) => {
      this.id = data['id'];
    });
  }


  // editFurniture() {
  //   console.log(this.id);
  //   this.furnitureService.editFurniture(this.form.value, this.id).subscribe(() => {
  //     this.router.navigate(['/furniture/user']);
  //   });
  // }
  //
  // get f() {
  //   return this.form.controls;
  // }

}
