import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FurnitureService} from '../../../core/services/furniture.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-furniture-edit',
  templateUrl: './furniture-edit.component.html',
  styleUrls: ['./furniture-edit.component.css']
})
export class FurnitureEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(private fb: FormBuilder,
              private furnitureService: FurnitureService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      make: ['', [Validators.required, Validators.minLength(4)]],
      model: ['', [Validators.required, Validators.minLength(4)]],
      year: ['', [Validators.required, Validators.min(1950), Validators.max(2050)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0)]],
      image: ['', [Validators.required]],
      material: ['', [Validators.nullValidator]],
    });

    this.route.params.subscribe((data) => {
      this.id = data['id'];
    });
  }

  editFurniture() {
    console.log(this.id);
    this.furnitureService.editFurniture(this.form.value, this.id).subscribe(() => {
      this.router.navigate(['/furniture/user']);
    });
  }

  get f() {
    return this.form.controls;
  }

}
