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
      title: ['', [Validators.required, Validators.minLength(4)]],
      subtitle: ['', [Validators.required, Validators.minLength(4)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', [Validators.required]],
    });

    this.route.params.subscribe((data) => {
      this.id = data['id'];
    });
  }
}
