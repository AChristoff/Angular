import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FurnitureService} from '../../../core/services/furniture.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Posts} from '../../shared/models/furniture';

@Component({
  selector: 'app-furniture-edit',
  templateUrl: './furniture-edit.component.html',
  styleUrls: ['./furniture-edit.component.scss']
})
export class FurnitureEditComponent implements OnInit {
  furniture: Posts;
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
      title: [this.furniture['post']['title'], [Validators.required, Validators.minLength(2)]],
      subtitle: [this.furniture['post']['subtitle'], [Validators.required, Validators.minLength(2)]],
      content: [this.furniture['post']['content'], [Validators.required, Validators.minLength(10)]],
      image: [this.furniture['post']['image'], [Validators.required]],
    });

    this.route.params.subscribe((data) => {
      this.id = data['id'];
    });
  }
}
